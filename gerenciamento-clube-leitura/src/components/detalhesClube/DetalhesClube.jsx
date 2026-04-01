import { useContext, useEffect } from "react";
import { ClubeContext } from "../../providers/ClubeProvider";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import DescricaoClube from "../descricaoClube/DescricaoClube";
import styles from "./DetalhesClube.module.scss";

export default function DetalhesClube() {
  const { id } = useParams();
  const { detalhes, carregarDetalhes } = useContext(ClubeContext);
  const clube = detalhes[id];

  useEffect(() => {
    if (id) carregarDetalhes(id);
  }, [id, carregarDetalhes]);

  if (!clube) return <p>Carregando...</p>;

  return (
    <div className={styles.detalhes}>
      <div className={styles.detalhesContainer}>
        <h1>{clube.nome}</h1>
        <DescricaoClube descricao={clube.descricao} />
        <Link to={`/clube/${clube.id}/sessoes`}>Ver sessoes</Link>
        <Outlet context={{ clube }} />
      </div>
    </div>
  );
}
