
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.creaPost = async (req, res) => {
  const { titolo, contenuto, tipo } = req.body;

  try {
    const post = await prisma.postBacheca.create({
      data: {
        titolo,
        contenuto,
        tipo,
        autoreId: req.user.id
      }
    });

    res.status(201).json({ message: 'Post pubblicato.', post });
  } catch (err) {
    res.status(500).json({ error: 'Errore pubblicazione post.' });
  }
};

exports.getPostBacheca = async (req, res) => {
  try {
    const posts = await prisma.postBacheca.findMany({
      orderBy: { timestamp: 'desc' },
      include: { autore: true }
    });

    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero post.' });
  }
};

exports.eliminaPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.postBacheca.findUnique({ where: { id } });

    if (!post) {
      return res.status(404).json({ error: 'Post non trovato.' });
    }

    if (post.autoreId !== req.user.id && req.user.ruolo !== 'master' && req.user.ruolo !== 'admin') {
      return res.status(403).json({ error: 'Non hai i permessi per cancellare questo post.' });
    }

    await prisma.postBacheca.delete({ where: { id } });

    res.status(200).json({ message: 'Post eliminato.' });
  } catch (err) {
    res.status(500).json({ error: 'Errore eliminazione post.' });
  }
};


exports.getBachecaTipo = async (req, res) => {
  const { tipo } = req.params;

  try {
    if (tipo === 'staff' && req.user.ruolo !== 'admin' && req.user.ruolo !== 'master') {
      return res.status(403).json({ error: 'Accesso negato alla bacheca staff.' });
    }

    const posts = await prisma.postBacheca.findMany({
      where: { visibilita: tipo },
      orderBy: { timestamp: 'desc' },
      include: { autore: true }
    });

    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero bacheca.' });
  }
};


exports.aggiungiCommento = async (req, res) => {
  const { id } = req.params;
  const { testo } = req.body;

  try {
    const commento = await prisma.commentoPostBacheca.create({
      data: {
        postId: id,
        testo,
        autoreId: req.user.id
      }
    });

    res.status(201).json({ message: 'Commento pubblicato.', commento });
  } catch (err) {
    res.status(500).json({ error: 'Errore pubblicazione commento.' });
  }
};

exports.getCommenti = async (req, res) => {
  const { id } = req.params;

  try {
    const commenti = await prisma.commentoPostBacheca.findMany({
      where: { postId: id },
      orderBy: { timestamp: 'asc' },
      include: { autore: true }
    });

    res.status(200).json({ commenti });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero commenti.' });
  }
};

exports.visualizzaPost = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.postBacheca.update({
      where: { id },
      data: { visualizzazioni: { increment: 1 } }
    });

    const post = await prisma.postBacheca.findUnique({
      where: { id },
      include: { autore: true }
    });

    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ error: 'Errore visualizzazione post.' });
  }
};

exports.modificaPost = async (req, res) => {
  const { id } = req.params;
  const { titolo, contenuto, tipo, visibilita, tag } = req.body;

  try {
    const post = await prisma.postBacheca.findUnique({ where: { id } });

    if (post.autoreId !== req.user.id && req.user.ruolo !== 'admin' && req.user.ruolo !== 'master') {
      return res.status(403).json({ error: 'Non autorizzato.' });
    }

    const aggiornato = await prisma.postBacheca.update({
      where: { id },
      data: { titolo, contenuto, tipo, visibilita, tag }
    });

    res.status(200).json({ message: 'Post modificato.', aggiornato });
  } catch (err) {
    res.status(500).json({ error: 'Errore modifica post.' });
  }
};
