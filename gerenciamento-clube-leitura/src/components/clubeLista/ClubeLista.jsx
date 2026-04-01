import NovoClube from "../novoClube/NovoClube";
import styles from "./ClubeLista.module.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ClubeContext } from "../../providers/ClubeProvider";

export default function ClubeLista() {
  const { clubes, dispatch } = useContext(ClubeContext);
  const [confirmarExclusao, setConfirmarExclusao] = useState(null);

  const handleExcluir = (id) => {
    dispatch({ type: "DELETE_CLUBE", payload: id });
    setConfirmarExclusao(null);
  };

  return (
    <div className={styles.clubeLista}>
      <div className={styles.clubeListaContainer}>
        <h1>Clubes de Leitura</h1>
        <ul>
          {clubes.map((clube) => (
            <li key={clube.id}>
              <Link to={`/clube/${clube.id}`} className={styles.titulo}>
                {clube.nome}
              </Link>
              <a onClick={() => setConfirmarExclusao(clube.id)} className={styles.delete}>
                X
              </a>
            </li>
          ))}
        </ul>
      </div>

      {confirmarExclusao && (
        <div className={styles.modalBg}>
          <div className={styles.modal}>
            <h3>Tem certeza?</h3>
            <div className={styles.modalOpcoes}>
              <a onClick={() => handleExcluir(confirmarExclusao)}>Sim</a>
              <a onClick={() => setConfirmarExclusao(null)}>Não</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
