import { useParams, useOutletContext } from "react-router-dom";

export default function SessoesClube() {
  const { clube } = useOutletContext();

  if (!clube) return <p>Clube não encontrado</p>;

  return (
    <div>
      <h2>Sessões de {clube.nome}</h2>
      <ul>
        {clube.sessoes?.map((sessao) => (
          <li key={sessao.id}>{sessao.livroDiscutido}</li>
        ))}
      </ul>
    </div>
  );
}
