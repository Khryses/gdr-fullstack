
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const verificaOnlinePosizione = async (daId, aId) => {
  const da = await prisma.character.findUnique({ where: { id: daId } });
  const a = await prisma.character.findUnique({ where: { id: aId } });
  return da.online && a.online && da.posizione && a.posizione && da.posizione === a.posizione;
};

exports.aggiungiOggetto = async (req, res) => {
  const { nome, descrizione, quantita, valoreAcquisto, characterId } = req.body;

  try {
    const valoreVendita = Math.floor(valoreAcquisto * 0.7);

    const oggetto = await prisma.oggettoInventario.create({
      data: {
        nome,
        descrizione,
        quantita,
        valoreAcquisto,
        valoreVendita,
        characterId
      }
    });

    res.status(201).json({ message: 'Oggetto aggiunto.', oggetto });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiunta oggetto.' });
  }
};

exports.getInventario = async (req, res) => {
  const { characterId } = req.params;

  try {
    const oggetti = await prisma.oggettoInventario.findMany({
      where: { characterId },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ oggetti });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero inventario.' });
  }
};

exports.modificaOggetto = async (req, res) => {
  const { id } = req.params;
  const { nome, descrizione, quantita, valoreAcquisto } = req.body;

  try {
    const valoreVendita = Math.floor(valoreAcquisto * 0.7);

    const oggetto = await prisma.oggettoInventario.update({
      where: { id },
      data: {
        nome,
        descrizione,
        quantita,
        valoreAcquisto,
        valoreVendita
      }
    });

    res.status(200).json({ message: 'Oggetto modificato.', oggetto });
  } catch (err) {
    res.status(500).json({ error: 'Errore modifica oggetto.' });
  }
};

exports.eliminaOggetto = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.oggettoInventario.delete({ where: { id } });

    res.status(200).json({ message: 'Oggetto rimosso.' });
  } catch (err) {
    res.status(500).json({ error: 'Errore eliminazione oggetto.' });
  }
};


exports.trasferisciOggetto = async (req, res) => {
  const { oggettoId, daId, aId, quantita } = req.body;

  try {
    const oggetto = await prisma.oggettoInventario.findUnique({ where: { id: oggettoId } });
    if (!oggetto || oggetto.characterId !== daId || oggetto.quantita < quantita) {
      return res.status(400).json({ error: 'Quantità non valida o oggetto non appartenente.' });
    }

    await prisma.oggettoInventario.update({
      where: { id: oggettoId },
      data: { quantita: { decrement: quantita } }
    });

    const esistente = await prisma.oggettoInventario.findFirst({
      where: {
        nome: oggetto.nome,
        characterId: aId
      }
    });

    if (esistente) {
      await prisma.oggettoInventario.update({
        where: { id: esistente.id },
        data: { quantita: { increment: quantita } }
      });
    } else {
      await prisma.oggettoInventario.create({
        data: {
          nome: oggetto.nome,
          descrizione: oggetto.descrizione,
          quantita,
          valoreAcquisto: oggetto.valoreAcquisto,
          valoreVendita: oggetto.valoreVendita,
          categoria: oggetto.categoria,
          characterId: aId
        }
      });
    }

    if (!(await verificaOnlinePosizione(daId, aId))) {
      return res.status(403).json({ error: 'I personaggi devono essere online e nello stesso luogo.' });
    }

    const log = await prisma.trasferimentoOggetto.create({
      data: {
        oggettoId,
        daId,
        aId,
        quantita
      }
    });

    res.status(200).json({ message: 'Oggetto trasferito.', log });
  } catch (err) {
    res.status(500).json({ error: 'Errore trasferimento.' });
  }
};

exports.modificaMonete = async (req, res) => {
  const { characterId, quantita } = req.body;

  try {
    const character = await prisma.character.update({
      where: { id: characterId },
      data: { monete: quantita }
    });

    res.status(200).json({ message: 'Monete aggiornate.', character });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento monete.' });
  }
};
