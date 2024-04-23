import React, { useState } from "react";
import styles from "./Audiologist.module.css";
import { Link } from "react-router-dom";

const AudiologistSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    crm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className={styles.backgroundForms}>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <h1 className={styles.titleForms}>Cadastro de Fonoaudiólogo</h1>
        <label className={styles.fieldForms}>
          <span>E-mail:</span>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.fieldForms}>
          <span>Confirmar E-mail:</span>
          <input
            required
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </label>
        <label className={styles.fieldForms}>
          <span>Senha:</span>
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label className={styles.fieldForms}>
          <span>CRM:</span>
          <input
            required
            type="text"
            name="crm"
            value={formData.crm}
            onChange={handleChange}
          />
        </label>
        <button className={styles.buttonSubmit} type="submit">
          Cadastrar
        </button>
        <Link to="/register" className={styles.backRegister}>Voltar</Link>
      </form>
    </div>
  );
};

export default AudiologistSignup;
