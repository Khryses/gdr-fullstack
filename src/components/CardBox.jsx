function CardBox({ title, children }) {
  return (
    <div className="card-box">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default CardBox;