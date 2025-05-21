
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getMappe = async (req, res) => {
  try {
    const mappe = await prisma.mappa.findMany({
      include: { luoghi: true },
      orderBy: { principale: 'desc' }
    });

    res.status(200).json({ mappe });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero mappe.' });
  }
};

exports.getMappa = async (req, res) => {
  const { id } = req.params;

  try {
    const mappa = await prisma.mappa.findUnique({
      where: { id },
      include: { luoghi: true }
    });

    res.status(200).json({ mappa });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero mappa.' });
  }
};

exports.creaMappa = async (req, res) => {
  const { nome, descrizione, immagine, principale } = req.body;

  try {
    const mappa = await prisma.mappa.create({
      data: { nome, descrizione, immagine, principale }
    });

    res.status(201).json({ message: 'Mappa creata.', mappa });
  } catch (err) {
    res.status(500).json({ error: 'Errore creazione mappa.' });
  }
};

exports.creaLuogo = async (req, res) => {
  const { nome, descrizione, mappaId } = req.body;

  try {
    const luogo = await prisma.luogo.create({
      data: { nome, descrizione, mappaId }
    });

    res.status(201).json({ message: 'Luogo creato.', luogo });
  } catch (err) {
    res.status(500).json({ error: 'Errore creazione luogo.' });
  }
};
