
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.effettuaTransazione = async (req, res) => {
  const { mittenteId, destinatarioId, importo } = req.body;

  try {
    const mittente = await prisma.character.findUnique({ where: { id: mittenteId } });
    const destinatario = await prisma.character.findUnique({ where: { id: destinatarioId } });

    if (!mittente || !destinatario) {
      return res.status(404).json({ error: 'Personaggi non trovati.' });
    }

    if (!mittente.online || !destinatario.online || mittente.posizione !== destinatario.posizione) {
      return res.status(403).json({ error: 'Entrambi i personaggi devono essere online e nello stesso luogo.' });
    }

    if (mittente.monete < importo) {
      return res.status(400).json({ error: 'Fondi insufficienti.' });
    }

    await prisma.character.update({
      where: { id: mittenteId },
      data: { monete: { decrement: importo } }
    });

    await prisma.character.update({
      where: { id: destinatarioId },
      data: { monete: { increment: importo } }
    });

    const transazione = await prisma.transazioneMonetaria.create({
      data: {
        mittenteId,
        destinatarioId,
        importo
      }
    });

    res.status(200).json({ message: 'Transazione completata.', transazione });
  } catch (err) {
    res.status(500).json({ error: 'Errore esecuzione transazione.' });
  }
};

exports.listaTransazioni = async (req, res) => {
  const { characterId } = req.params;

  try {
    const transazioni = await prisma.transazioneMonetaria.findMany({
      where: {
        OR: [
          { mittenteId: characterId },
          { destinatarioId: characterId }
        ]
      },
      orderBy: { timestamp: 'desc' },
      include: {
        mittente: true,
        destinatario: true
      }
    });

    res.status(200).json({ transazioni });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero transazioni.' });
  }
};
