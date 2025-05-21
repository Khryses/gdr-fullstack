
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.sendMessage = async (req, res) => {
  const { destinatarioId, contenuto, tipo } = req.body;
  const mittenteId = req.user.id;

  try {
    const messaggio = await prisma.messaggio.create({
      data: {
        mittenteId,
        destinatarioId,
        contenuto,
        tipo
      }
    });

    res.status(201).json({ message: 'Messaggio inviato.', messaggio });
  } catch (err) {
    res.status(500).json({ error: 'Errore invio messaggio.' });
  }
};

exports.getInbox = async (req, res) => {
  const utenteId = req.user.id;

  try {
    const ricevuti = await prisma.messaggio.findMany({
      where: { destinatarioId: utenteId },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ ricevuti });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero messaggi.' });
  }
};

exports.getSent = async (req, res) => {
  const utenteId = req.user.id;

  try {
    const inviati = await prisma.messaggio.findMany({
      where: { mittenteId: utenteId },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ inviati });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero messaggi inviati.' });
  }
};
