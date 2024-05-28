//Components
import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/Api";
import { useAuth } from "../contexts/authContext";

//Styles
import styles from "./EasySpeak.module.css";

const EasySpeak = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { auth, signIn } = useAuth();
  
  useEffect(() => {
    authen()
  })

  const authen = async () => {
    const role = await localStorage.getItem('role')
    if(auth && role == 'Paciente') {
      navigate('/Query')
    } else if(auth && role == 'Fono') {
      navigate('/Query')
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }


    const response = await API.login(user);
    const token = response.token;
    const role = response.role;
    await signIn(token, role)
    if(token) {
      navigate('/Query')
    }
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.fieldForms}>
          <span>Senha:</span>
          <input
            required
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link to="/password" className={styles.anchor}>Esqueci minha senha</Link>
        <Link to="/register" className={styles.anchor}>Cadastre-se</Link>
        
        <button className={styles.buttonSubmit} onClick={(e) => handleLogin(e)}>Entrar</button>
      </form>
    </div>
  );
};

export default EasySpeak;
