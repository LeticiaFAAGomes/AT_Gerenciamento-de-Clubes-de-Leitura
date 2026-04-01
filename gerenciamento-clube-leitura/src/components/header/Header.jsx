import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerMain}>
      <nav>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.activeLink : "")}>
          Lista de Clubes
        </NavLink>
        <NavLink to='/adicionar' className={({ isActive }) => (isActive ? styles.activeLink : "")}>
          Novo Clube
        </NavLink>
      </nav>
    </header>
  );
}
