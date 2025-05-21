function SkillTree({ skills }) {
  return (
    <div className="card-box">
      <h3>Albero Abilità</h3>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>
            <strong>{s.name}</strong>: {s.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillTree;