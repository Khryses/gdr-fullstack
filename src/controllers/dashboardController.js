
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getDashboard = async (req, res) => {
  try {
    const utentiOnline = await prisma.character.findMany({
      where: { online: true, invisibile: false },
      include: { user: true }
    });

    const questAttive = await prisma.quest.findMany({
      where: { stato: { not: 'completata' } },
      orderBy: { timestamp: 'desc' }
    });

    const ticketAperti = await prisma.ticket.findMany({
      where: { stato: { not: 'chiuso' } },
      orderBy: { timestamp: 'desc' },
      include: { creatore: true }
    });

    const mappe = await prisma.mappa.findMany({
      include: { luoghi: true },
      orderBy: { principale: 'desc' }
    });

    const logMaster = await prisma.logMaster.findMany({
      orderBy: { timestamp: 'desc' },
      take: 20,
      include: { autore: true }
    });

    res.status(200).json({
      online: utentiOnline,
      quest: questAttive,
      ticket: ticketAperti,
      mappe,
      log: logMaster
    });
  } catch (err) {
    res.status(500).json({ error: 'Errore caricamento dashboard.' });
  }
};
