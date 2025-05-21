function ReputationStats({ reputation, level }) {
  return (
    <div className="card-box">
      <h3>Livello & Reputazione</h3>
      <p>Livello: {level}</p>
      <p>Reputazione: {reputation} / 100</p>
    </div>
  );
}

export default ReputationStats;