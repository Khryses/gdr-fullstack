
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.logDiceRoll = async (req, res) => {
  const { characterId, risultati, successi, critici, fallimenti } = req.body;

  try {
    const log = await prisma.diceLog.create({
      data: {
        characterId,
        risultati,
        successi,
        critici,
        fallimenti
      }
    });

    res.status(201).json({ message: 'Lancio salvato.', log });
  } catch (err) {
    res.status(500).json({ error: 'Errore salvataggio dado.' });
  }
};

exports.getDiceLog = async (req, res) => {
  const { id } = req.params;

  try {
    const logs = await prisma.diceLog.findMany({
      where: { characterId: id },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ logs });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero log.' });
  }
};


exports.deleteDiceLog = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.diceLog.delete({ where: { id } });
    res.status(200).json({ message: 'Log dado eliminato.' });
  } catch (err) {
    res.status(500).json({ error: 'Errore eliminazione log dado.' });
  }
};
