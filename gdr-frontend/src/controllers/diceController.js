
exports.rollDice = (req, res) => {
  const { statisticBonus, skillBonus, pool } = req.body;

  const totalDice = pool + (statisticBonus || 0) + (skillBonus || 0);
  if (!totalDice || totalDice < 1) {
    return res.status(400).json({ error: 'Pool di dadi non valido.' });
  }

  const rolls = [];
  let successi = 0;
  let critici = 0;
  let fallimenti = 0;

  for (let i = 0; i < totalDice; i++) {
    const result = Math.floor(Math.random() * 10) + 1;
    rolls.push(result);

    if (result === 10) {
      successi++;
      critici++;
    } else if (result >= 6) {
      successi++;
    } else if (result === 1) {
      fallimenti++;
    }
  }

  res.status(200).json({
    rolls,
    successi,
    critici,
    fallimenti,
    totaleDadi: totalDice
  });
};
