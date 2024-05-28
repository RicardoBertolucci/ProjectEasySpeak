import React, { useState } from "react";
import styles from "./Audiologist.module.css";
import { Link } from "react-router-dom";
import API from '../services/Api'

const AudiologistSignup = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = async () => {
    const response = await API.fetchConsultas();
    setConsultations(response)
  }

  return (
    <div className={styles.backgroundForms}>
      <div className={styles.forms}>
        <h1 className={styles.titleForms}>Consultas</h1>

        {consultations > 0 ? consultations.map((consultation) => (
          <>
            <label className={styles.fieldForms}>
              <span>Pacinte</span>
              <span>{consultation.nomePaciente}</span>
            </label>
            <label className={styles.fieldForms}>
              <span>Data</span>
              <span>{consultation.data}</span>
            </label>
            <label className={styles.fieldForms}>
              <span>horario</span>
              <span>{consultation.horario}</span>
            </label>
          </>
        )) : (
          <label className={styles.fieldForms}>
            <span>Você não tem nenhuma consulta marcada, fique tranquilo!</span>
          </label>
        )}
        <button className={styles.buttonSubmit} type="submit">
          Cadastrar
        </button>
        <Link to="/register" className={styles.backRegister}>Voltar</Link>
      </div>
    </div>
  );
};

export default AudiologistSignup;
