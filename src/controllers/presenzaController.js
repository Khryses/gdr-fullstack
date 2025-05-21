
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.listaOnline = async (req, res) => {
  try {
    const online = await prisma.character.findMany({
      where: {
        online: true,
        invisibile: false
      },
      include: {
        user: true
      }
    });

    res.status(200).json({ online });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero online.' });
  }
};

exports.mappaLuoghi = async (req, res) => {
  try {
    const personaggi = await prisma.character.findMany({
      where: {
        online: true,
        invisibile: false
      }
    });

    const mappa = {};

    for (const pg of personaggi) {
      if (!pg.posizione) continue;
      if (!mappa[pg.posizione]) mappa[pg.posizione] = [];
      mappa[pg.posizione].push(pg);
    }

    res.status(200).json({ luoghi: mappa });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero mappa.' });
  }
};
