import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

function GameChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chat message', input);
    setInput('');
  };

  return (
    <div>
      <h3>Chat di Gioco</h3>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default GameChat;