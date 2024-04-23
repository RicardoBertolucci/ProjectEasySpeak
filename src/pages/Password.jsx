import React from "react";
import { Link } from "react-router-dom";
import styles from "./Password.module.css";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para solicitar a redefinição da senha
  };

  return (
    <div className={styles.backgroundForms}>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <h1 className={styles.titleForms}>Esqueci minha senha</h1>
        <label className={styles.fieldForms}>
          <span>E-mail:</span>
          <input
            required
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
          />
        </label>
        <button className={styles.buttonSubmit}>Enviar e-mail de recuperação</button>
        <Link to="/easyspeak" className={styles.anchor}>Voltar para o login</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
