import { useReducer, useContext } from "react";
import { ClubeContext } from "../../providers/ClubeProvider";
import styles from "./NovoClube.module.scss";

const initialState = {
  nome: "",
  erro: "",
  isSubmitDisabled: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NOME":
      const valor = action.payload;
      const temErro = !valor.trim() ? "Nome é obrigatório" : valor.length < 3 ? "Nome deve ter ao menos 3 caracteres" : "";
      return {
        ...state,
        nome: valor,
        erro: temErro,
        isSubmitDisabled: !!temErro,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function NovoClube() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch: dispatchClube } = useContext(ClubeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.isSubmitDisabled) {
      const novoClube = { id: `clb-${Date.now()}`, nome: state.nome };
      dispatchClube({ type: "ADD_CLUBE", payload: novoClube });
      dispatch({ type: "RESET" });
    }
  };

  return (
    <div className={styles.novoClube}>
      <div className={styles.novoClubeContainer}>
        <h2>Cadastro de Novo Clube</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Insira o nome do clube' value={state.nome} onChange={(e) => dispatch({ type: "SET_NOME", payload: e.target.value })} />
          {state.erro && <p className={styles.erro}>{state.erro}</p>}
          <button type='submit' disabled={state.isSubmitDisabled}>
            Add Clube
          </button>
        </form>
      </div>
    </div>
  );
}
