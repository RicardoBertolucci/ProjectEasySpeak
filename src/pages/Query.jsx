import React, { useState, useEffect } from "react";
import styles from "./Query.module.css";
import API from "../services/Api";

const Query = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fonos, setFonos] = useState([]);

  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = async () => {
    const response = await API.fetchDoctors()
    setFonos(response)
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Formulário enviado com o e-mail:", email);
      console.log("Data selecionada:", date);
      console.log("Horário selecionado:", time);
    } else {
      setEmailError("Por favor, insira um endereço de e-mail válido.");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className={styles.appointmentContainer}>
      <h1 className={styles.title}>Agendar uma consulta</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nome:
          <input type="text" className={styles.input} placeholder="Digite seu nome" />
        </label>
        <label className={styles.label}>
          E-mail:
          <input type="email" className={styles.input} placeholder="Digite seu e-mail" value={email} onChange={handleChange} />
          {emailError && <span className={styles.error}>{emailError}</span>}
        </label>
        <label className={styles.label}>
          Data:
          <input type="date" className={styles.input} value={date} onChange={handleDateChange} />
        </label>
        <label className={styles.label}>
          Horário:
          <input type="time" className={styles.input} value={time} onChange={handleTimeChange} />
        </label>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Query;