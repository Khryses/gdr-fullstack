
import React, { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica registrazione qui
    console.log("Registrazione inviata", form);
  };

  return (
    <div className="register-modal">
      <h2>Registrati a Eodum</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Nome utente" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Crea Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
