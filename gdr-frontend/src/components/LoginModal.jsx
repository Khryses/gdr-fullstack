
import React, { useState, useRef, useEffect } from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy
      }));
      dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => setDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
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
        onClick={(e) => e.stopPropagation()}
        style={{ left: position.x, top: position.y, position: "fixed" }}
      >
        <div className="modal-header" onMouseDown={handleMouseDown}>
          <h2>{forgotMode ? "Recupera Password" : "Accedi a Eodum"}</h2>
          <button className="close-button" onClick={onClose}>✖</button>
        </div>
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
        <a href="#" className="forgot-link" onClick={(e) => { e.preventDefault(); setForgotMode(!forgotMode); }}>
          {forgotMode ? "Torna al login" : "Hai dimenticato la password?"}
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
