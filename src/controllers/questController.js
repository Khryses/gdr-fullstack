
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.creaQuest = async (req, res) => {
  const { titolo, descrizione } = req.body;

  try {
    const quest = await prisma.quest.create({
      data: {
        titolo,
        descrizione,
        creatoreId: req.user.id
      }
    });

    res.status(201).json({ message: 'Quest creata.', quest });
  } catch (err) {
    res.status(500).json({ error: 'Errore creazione quest.' });
  }
};

exports.assegnaQuest = async (req, res) => {
  const { id } = req.params;
  const { characterId } = req.body;

  try {
    const quest = await prisma.quest.update({
      where: { id },
      data: {
        characterId,
        stato: 'assegnata'
      }
    });

    await prisma.notifica.create({
      data: {
        destinatarioId: (await prisma.character.findUnique({ where: { id: characterId } })).userId,
        messaggio: `Ti è stata assegnata una nuova quest: "${quest.titolo}"`,
        tipo: "info"
      }
    });

    res.status(200).json({ message: 'Quest assegnata.', quest });
  } catch (err) {
    res.status(500).json({ error: 'Errore assegnazione quest.' });
  }
};

exports.completaQuest = async (req, res) => {
  const { id } = req.params;

  try {
    const quest = await prisma.quest.update({
      where: { id },
      data: { stato: 'completata' }
    });

    await prisma.notifica.create({
      data: {
        destinatarioId: (await prisma.character.findUnique({ where: { id: quest.characterId } })).userId,
        messaggio: `Hai completato la quest: "${quest.titolo}"`,
        tipo: "info"
      }
    });

    res.status(200).json({ message: 'Quest completata.', quest });
  } catch (err) {
    res.status(500).json({ error: 'Errore completamento quest.' });
  }
};

exports.questAssegnate = async (req, res) => {
  try {
    const character = await prisma.character.findFirst({
      where: { userId: req.user.id }
    });

    const quests = await prisma.quest.findMany({
      where: { characterId: character.id },
      orderBy: { timestamp: 'desc' }
    });

    res.status(200).json({ quests });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero quest.' });
  }
};

exports.questTotali = async (req, res) => {
  try {
    const quests = await prisma.quest.findMany({
      orderBy: { timestamp: 'desc' },
      include: { personaggio: true, creatore: true }
    });

    res.status(200).json({ quests });
  } catch (err) {
    res.status(500).json({ error: 'Errore recupero tutte le quest.' });
  }
};


exports.aggiornaQuest = async (req, res) => {
  const { id } = req.params;
  const { titolo, descrizione, xpRicompensa, stato } = req.body;

  try {
    const quest = await prisma.quest.update({
      where: { id },
      data: {
        titolo,
        descrizione,
        xpRicompensa,
        stato
      }
    });

    res.status(200).json({ message: 'Quest aggiornata.', quest });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento quest.' });
  }
};

exports.completaQuest = async (req, res) => {
  const { id } = req.params;

  try {
    const quest = await prisma.quest.update({
      where: { id },
      data: { stato: 'completata' }
    });

    if (quest.characterId && quest.xpRicompensa && quest.xpRicompensa > 0) {
      await prisma.character.update({
        where: { id: quest.characterId },
        data: {
          esperienza: { increment: quest.xpRicompensa }
        }
      });

      await prisma.xPLog.create({
        data: {
          characterId: quest.characterId,
          valore: quest.xpRicompensa,
          descrizione: `Ricompensa per la quest: ${quest.titolo}`
        }
      });
    }

    await prisma.notifica.create({
      data: {
        destinatarioId: (await prisma.character.findUnique({ where: { id: quest.characterId } })).userId,
        messaggio: `Hai completato la quest: "${quest.titolo}"`,
        tipo: "info"
      }
    });

    res.status(200).json({ message: 'Quest completata.', quest });
  } catch (err) {
    res.status(500).json({ error: 'Errore completamento quest.' });
  }
};
