import { useState } from 'react';

function FullEditor() {
  const [section, setSection] = useState('oggetti');
  const [data, setData] = useState({ name: '', description: '' });

  const changeSection = (s) => {
    setSection(s);
    setData({ name: '', description: '' });
  };

  return (
    <div>
      <h2>Editor Completo</h2>
      <nav className="tabs">
        {['oggetti', 'missioni', 'mappe'].map(s => (
          <button key={s} onClick={() => changeSection(s)}>{s}</button>
        ))}
      </nav>
      <form>
        <input placeholder="Nome" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
        <textarea placeholder="Descrizione" value={data.description} onChange={e => setData({ ...data, description: e.target.value })}></textarea>
      </form>
      <div className="card-box">
        <h3>Anteprima {section}</h3>
        <strong>{data.name}</strong>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default FullEditor;