
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addSkill = async (req, res) => {
  const { characterId, nome, valore } = req.body;

  try {
    const skill = await prisma.abilita.create({
      data: {
        nome,
        valore,
        characterId
      }
    });

    res.status(201).json({ message: 'Abilità aggiunta.', skill });
  } catch (err) {
    res.status(500).json({ error: 'Errore creazione abilità.' });
  }
};

exports.upgradeSkill = async (req, res) => {
  const { id } = req.params;

  try {
    const skill = await prisma.abilita.findUnique({ where: { id }, include: { character: true } });
    if (!skill) return res.status(404).json({ error: 'Abilità non trovata.' });

    const costo = 3 * (skill.valore + 1); // 3 XP per livello successivo
    if (skill.character.esperienza < costo) {
      return res.status(400).json({ error: 'XP insufficiente.' });
    }

    await prisma.abilita.update({
      where: { id },
      data: { valore: skill.valore + 1 }
    });

    await prisma.character.update({
      where: { id: skill.characterId },
      data: { esperienza: skill.character.esperienza - costo }
    });

    res.status(200).json({ message: 'Abilità migliorata.', nuovoValore: skill.valore + 1, xpSpesa: costo });
  } catch (err) {
    res.status(500).json({ error: 'Errore aggiornamento abilità.' });
  }
};
