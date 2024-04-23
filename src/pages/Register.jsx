import React from "react";
import { Link } from "react-router-dom"; // Importe o componente Link
import styles from "./Register.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.backgroundForms}>
      <div className={styles.container}>
        <form className={styles.forms}>
          <h1 className={styles.titleForms}>Cadastro</h1>
          <div className={styles.selectionButtons}>
            <Link to="/patient" className={styles.selectionButton}>
              Paciente
            </Link>
            <Link to="/audiologist" className={styles.selectionButton}>
              Fonoaudiólogo
            </Link>
          </div>
          <Link to="/easyspeak" className={styles.backEasyspeak}>Voltar</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;