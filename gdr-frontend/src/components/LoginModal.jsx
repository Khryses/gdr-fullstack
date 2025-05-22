
import React, { useState, useRef, useEffect } from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const modalRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging.current) return;
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      position.current = { x: newX, y: newY };
      if (modalRef.current) {
        modalRef.current.style.left = `${newX}px`;
        modalRef.current.style.top = `${newY}px`;
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    dragging.current = true;
    const rect = modalRef.current.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
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

  const toggleForgot = (e) => {
    e.preventDefault();
    setForgotMode(!forgotMode);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="login-modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
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
        <a href="#" className="forgot-link" onClick={toggleForgot}>
          {forgotMode ? "Torna al login" : "Hai dimenticato la password?"}
        </a>
      </div>
    </div>
  );
};

export default LoginModal;
