//Components
import React from "react";
import ImageHome from "../img/Home.svg";
import { Link } from "react-router-dom";

//styles
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.backgroundHome}>
      <div className={styles.contentText}>
        <p>
          A gagueira é um distúrbio comum da fala que afeta crianças de todas as
          idades. Ela pode causar frustração, ansiedade e até mesmo evitar que
          seu filho se expresse livremente.
          <br /> Na EasySpeak, nossa equipe experiente de fonoaudiólogos
          especializados em gagueira infantil está pronta para ajudar seu filho
          a superar esse desafio e desenvolver as habilidades necessárias para
          se comunicar com fluidez e confiança.
        </p>
        <br />
      </div>
      <div className={styles.contentDiv}>
        <img src={ImageHome} alt="Imagem" />
        <div>
          <p className={styles.paragraphHome}>
            Oferecemos:
            <br />
            <br />
            • Avaliação completa: Através de observações, questionários e testes
            específicos, identificamos as causas da gagueira do seu filho e
            definimos o plano de tratamento ideal.
            <br />
            <br />
            • Terapia individualizada: Criamos um plano de tratamento
            personalizado para as necessidades do seu filho, utilizando técnicas
            comprovadas para reduzir a gagueira e melhorar a fluência da fala.
            <br />
            <br />
            • Orientação familiar: Ensinamos aos pais e familiares como apoiar o
            desenvolvimento da comunicação da criança de forma positiva e
            eficaz.
            <br />
            <br />• Suporte contínuo: Acompanhamos o progresso do seu filho ao
            longo do tratamento e oferecemos suporte contínuo para garantir que
            ele alcance seus objetivos.
          </p>
          <Link to="/easyspeak" className={styles.link}>
            <button className={styles.buttonLogin}>Agende sua consulta</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
