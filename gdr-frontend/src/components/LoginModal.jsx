
import React, { useState, useRef, useEffect } from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (modalRef.current && e.buttons === 1) {
        modalRef.current.style.left = \`\${e.clientX - dragOffset.x}px\`;
        modalRef.current.style.top = \`\${e.clientY - dragOffset.y}px\`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [dragOffset]);

  const startDrag = (e) => {
    const rect = modalRef.current.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (forgotMode) {
      console.log("Invio recupero password a:", email);
    } else {
      console.log("Login:", { email, password });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="login-modal"
        ref={modalRef}
        onMouseDown={startDrag}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{forgotMode ? "Recupera Password" : "Accedi a Eodum"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!forgotMode && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}
          <button type="submit">{forgotMode ? "Invia link" : "Accedi"}</button>
        </form>
        {!forgotMode ? (
          <a href="#" className="forgot-link" onClick={() => setForgotMode(true)}>
            Hai dimenticato la password?
          </a>
        ) : (
          <a href="#" className="forgot-link" onClick={() => setForgotMode(false)}>
            Torna al login
          </a>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
