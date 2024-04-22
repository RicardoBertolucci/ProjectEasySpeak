//Components
import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./EasySpeak.module.css";

const EasySpeak = () => {
  return (
    <div className={styles.backgroundForms}>
      <form className={styles.forms}>
        <h1 className={styles.titleForms}>EasySpeak</h1>
        <label className={styles.fieldForms}>
          <span>E-mail:</span>
          <input
            required
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.fieldForms}>
          <span>Senha:</span>
          <input
            required
            type="password"
            name="password"
            placeholder="Digite sua senha"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <Link to="/password" className={styles.anchor}>Esqueci minha senha</Link>
        <Link to="/SignUp" className={styles.anchor}>Cadastre-se</Link>
        
        <button className={styles.buttonSubmit}>Entrar</button>
      </form>
    </div>
  );
};

export default EasySpeak;
