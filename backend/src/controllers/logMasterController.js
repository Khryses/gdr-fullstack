
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.logAzione = async (req, res) => {
  const { azione, oggettoId } = req.body;

  try {
    const log = await prisma.logMaster.create({
      data: {
        autoreId: req.user.id,
        azione,
        oggettoId
      }
    });

    res.status(201).json({ message: 'Azione loggata.', log });
  } catch (err) {
    res.status(500).json({ error: 'Errore log azione.' });
  }
};
