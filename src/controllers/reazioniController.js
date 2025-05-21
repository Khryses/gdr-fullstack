
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.aggiungiReazione = async (req, res) => {
  const { postId, tipo } = req.body;

  try {
    const reazione = await prisma.reazionePost.create({
      data: {
        tipo,
        postId,
        utenteId: req.user.id
      }
    });

    res.status(201).json({ message: 'Reazione aggiunta.', reazione });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiunta reazione.' });
  }
};

exports.getReazioni = async (req, res) => {
  const { postId } = req.params;

  try {
    const reazioni = await prisma.reazionePost.findMany({
      where: { postId },
      include: { utente: true }
    });

    res.status(200).json({ reazioni });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero reazioni.' });
  }
};
