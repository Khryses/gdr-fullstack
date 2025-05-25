import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { quartiere, luogo } = useParams();
  const [messaggi, setMessaggi] = useState(["NPC: Benvenuto nel luogo."]);
  const [input, setInput] = useState("");

  const inviaMessaggio = () => {
    if (input.trim()) {
      setMessaggi([...messaggi, `Tu: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <h2>{decodeURIComponent(luogo)} — {decodeURIComponent(quartiere)}</h2>
      <div className="chat-box">
        {messaggi.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Scrivi il tuo messaggio..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button onClick={inviaMessaggio}>Invia</button>
      </div>
    </div>
  );
}