
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addXP = async (req, res) => {
  const { id } = req.params;
  const { valore, descrizione } = req.body;

  try {
    const character = await prisma.character.findUnique({ where: { id } });
    if (!character) return res.status(404).json({ error: 'Personaggio non trovato.' });

    const nuovaEsperienza = character.esperienza + valore;
    const nuovoLivello = Math.floor(nuovaEsperienza / 100) + 1;

    await prisma.character.update({
      where: { id },
      data: {
        esperienza: nuovaEsperienza,
        livello: nuovoLivello
      }
    });

    const log = await prisma.xPLog.create({
      data: {
        descrizione,
        valore,
        characterId: id
      }
    });

    res.status(200).json({
      message: 'XP assegnata.',
      nuovaEsperienza,
      nuovoLivello,
      log
    });
  } catch (err) {
    res.status(500).json({ error: 'Errore assegnazione XP.' });
  }
};


exports.getXPLog = async (req, res) => {
  const { id } = req.params;

  try {
    const logs = await prisma.xPLog.findMany({
      where: { characterId: id },
      orderBy: { data: 'desc' }
    });

    res.status(200).json({ logs });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero dei log XP.' });
  }
};
