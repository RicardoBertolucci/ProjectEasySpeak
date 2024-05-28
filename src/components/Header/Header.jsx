//Components
import { Link } from "react-router-dom";

//Styles
import styles from './Header.module.css';


const Navbar = () => {
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.anchor}>Home</Link>
      <Link to="/easyspeak" className={styles.anchor}>EasySpeak</Link>
      <Link to="/blog" className={styles.anchor}>Blog</Link>
    </nav>
  )
}

export default Navbar
