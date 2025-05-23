
import React, { useEffect, useState } from "react";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ titolo: "", contenuto: "", sezione: "pubblica", autore: "" });

  const fetchPosts = () => {
    fetch("/api/posts", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(data => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const autore = localStorage.getItem("user");
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ ...form, autore }),
    }).then(() => {
      fetchPosts();
      setForm({ titolo: "", contenuto: "", sezione: "pubblica", autore: "" });
    });
  };

  return (
    <div>
      <h2>Bacheca</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.titolo} onChange={e => setForm({ ...form, titolo: e.target.value })} placeholder="Titolo" />
        <textarea value={form.contenuto} onChange={e => setForm({ ...form, contenuto: e.target.value })} placeholder="Contenuto" />
        <select value={form.sezione} onChange={e => setForm({ ...form, sezione: e.target.value })}>
          <option value="pubblica">Pubblica</option>
          <option value="eventi">Eventi</option>
          <option value="privata">Privata</option>
        </select>
        <button type="submit">Pubblica</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.titolo}</strong>: {post.contenuto}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
