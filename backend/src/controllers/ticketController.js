
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.creaTicket = async (req, res) => {
  const { contenuto, priorita } = req.body;

  try {
    const ticket = await prisma.ticket.create({
      data: {
        creatoreId: req.user.id,
        contenuto,
        priorita
      }
    });

    res.status(201).json({ message: 'Ticket creato.', ticket });
  } catch (err) {
    res.status(500).json({ error: 'Errore creazione ticket.' });
  }
};

exports.mieiTicket = async (req, res) => {
  try {
    const ticket = await prisma.ticket.findMany({
      where: { creatoreId: req.user.id },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero ticket.' });
  }
};

exports.tuttiTicket = async (req, res) => {
  try {
    const ticket = await prisma.ticket.findMany({
      orderBy: { timestamp: 'desc' },
      include: { creatore: true }
    });

    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero ticket.' });
  }
};

exports.aggiornaStato = async (req, res) => {
  const { id } = req.params;
  const { stato } = req.body;

  try {
    const ticket = await prisma.ticket.update({
      where: { id },
      data: { stato }
    });

    res.status(200).json({ message: 'Ticket aggiornato.', ticket });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento ticket.' });
  }
};


exports.aggiungiCommento = async (req, res) => {
  const { id } = req.params;
  const { testo } = req.body;
  const autoreId = req.user.id;

  try {
    const commento = await prisma.commentoTicket.create({
      data: {
        ticketId: id,
        testo,
        autoreId
      }
    });

    const ticket = await prisma.ticket.findUnique({ where: { id } });
    const tipoNotifica = req.user.ruolo === 'master' || req.user.ruolo === 'admin' ? 'risposta_master' : 'risposta_player';

    await prisma.notifica.create({
      data: {
        destinatarioId: req.user.ruolo === 'master' ? ticket.creatoreId : (await prisma.user.findFirst({ where: { ruolo: 'master' } })).id,
        messaggio: `Nuovo commento su ticket #${id}`,
        tipo: tipoNotifica
      }
    });

    res.status(201).json({ message: 'Commento aggiunto.', commento });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiunta commento.' });
  }
};

exports.getCommenti = async (req, res) => {
  const { id } = req.params;

  try {
    const commenti = await prisma.commentoTicket.findMany({
      where: { ticketId: id },
      include: { autore: true },
      orderBy: { timestamp: 'asc' }
    });

    res.status(200).json({ commenti });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero commenti.' });
  }
};
