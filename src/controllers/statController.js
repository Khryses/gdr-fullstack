
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addStat = async (req, res) => {
  const { id } = req.params;
  const { tipo, valore } = req.body;

  try {
    const stat = await prisma.statistica.create({
      data: {
        tipo,
        valore,
        characterId: id
      }
    });
    res.status(201).json({ message: 'Statistica aggiunta.', stat });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiunta statistica.' });
  }
};

exports.updateStat = async (req, res) => {
  const { id } = req.params;
  const { valore } = req.body;

  try {
    const updated = await prisma.statistica.update({
      where: { id },
      data: { valore }
    });
    res.status(200).json({ message: 'Statistica aggiornata.', stat: updated });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento statistica.' });
  }
};


exports.upgradeStat = async (req, res) => {
  const { id } = req.params;

  try {
    const stat = await prisma.statistica.findUnique({ where: { id }, include: { character: true } });
    if (!stat) return res.status(404).json({ error: 'Statistica non trovata.' });

    const costo = 5 * (stat.valore + 1); // 5 XP per livello successivo
    if (stat.character.esperienza < costo) {
      return res.status(400).json({ error: 'XP insufficiente.' });
    }

    await prisma.statistica.update({
      where: { id },
      data: { valore: stat.valore + 1 }
    });

    await prisma.character.update({
      where: { id: stat.characterId },
      data: { esperienza: stat.character.esperienza - costo }
    });

    res.status(200).json({ message: 'Statistica migliorata.', nuovoValore: stat.valore + 1, xpSpesa: costo });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento statistica.' });
  }
};
