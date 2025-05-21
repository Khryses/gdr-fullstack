
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addReputation = async (req, res) => {
  const { id } = req.params;
  const { valore, motivo } = req.body;

  try {
    const character = await prisma.character.findUnique({ where: { id } });
    if (!character) return res.status(404).json({ error: 'Personaggio non trovato.' });

    const nuovaReputazione = character.reputazione + valore;

    await prisma.character.update({
      where: { id },
      data: {
        reputazione: nuovaReputazione
      }
    });

    const log = await prisma.reputazioneLog.create({
      data: {
        motivo,
        valore,
        characterId: id
      }
    });

    res.status(200).json({
      message: 'Reputazione aggiornata.',
      nuovaReputazione,
      log
    });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento reputazione.' });
  }
};

exports.getReputationLog = async (req, res) => {
  const { id } = req.params;

  try {
    const logs = await prisma.reputazioneLog.findMany({
      where: { characterId: id, visibile: true },
      orderBy: { data: 'desc' }
    });

    res.status(200).json({ logs });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero dei log reputazione.' });
  }
};


exports.updateReputationVisibility = async (req, res) => {
  const { id } = req.params;
  const { visibile } = req.body;

  try {
    const log = await prisma.reputazioneLog.update({
      where: { id },
      data: { visibile }
    });

    res.status(200).json({ message: 'Visibilità aggiornata.', log });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento visibilità.' });
  }
};
