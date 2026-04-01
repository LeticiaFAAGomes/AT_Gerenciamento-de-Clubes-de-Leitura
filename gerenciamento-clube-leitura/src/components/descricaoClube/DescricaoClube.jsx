import { useState, useRef, useLayoutEffect } from "react";
import styles from "./DescricaoClube.module.scss";

export default function DescricaoClube({ descricao }) {
  const [expandido, setExpandido] = useState(false);
  const [altura, setAltura] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current && descricao) {
      const alturaAtual = expandido ? ref.current.scrollHeight : 0;
      setAltura(alturaAtual);
    }
  }, [expandido, descricao]);

  return (
    <div className={styles.descricaoClube}>
      <div className={styles.descricaoClubeContainer}>
        {descricao ? (
          <div className={styles.info} ref={ref} style={{ maxHeight: `${altura}px`, overflow: "hidden" }}>
            {descricao}
          </div>
        ) : (
          <p>Descrição não disponível</p>
        )}
        <button onClick={() => setExpandido(!expandido)}>{expandido ? "Colapsar" : "Expandir"}</button>
      </div>
    </div>
  );
}
