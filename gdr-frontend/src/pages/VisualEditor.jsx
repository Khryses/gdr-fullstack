import { useState } from 'react';

function VisualEditor() {
  const [data, setData] = useState({ title: '', content: '' });

  return (
    <div>
      <h2>Visual Editor</h2>
      <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} placeholder="Titolo" />
      <textarea value={data.content} onChange={e => setData({ ...data, content: e.target.value })} placeholder="Contenuto"></textarea>
      <div className="card-box">
        <h3>Anteprima</h3>
        <strong>{data.title}</strong>
        <p>{data.content}</p>
      </div>
    </div>
  );
}

export default VisualEditor;