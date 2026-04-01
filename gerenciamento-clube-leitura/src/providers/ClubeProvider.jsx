import { createContext, useReducer, useEffect } from "react";

export const ClubeContext = createContext();

export const clubeReducer = (state, action) => {
  switch (action.type) {
    case "SET_CLUBES":
      return { ...state, lista: action.payload };
    case "SET_DETALHES":
      return { ...state, detalhes: { ...state.detalhes, [action.payload.id]: action.payload } };
    case "ADD_CLUBE":
      return { ...state, lista: [...state.lista, action.payload] };
    case "DELETE_CLUBE":
      return {
        ...state,
        lista: state.lista.filter((c) => c.id !== action.payload),
        detalhes: Object.fromEntries(Object.entries(state.detalhes).filter(([id]) => id !== action.payload)),
      };
    default:
      return state;
  }
};

export function ClubeProvider({ children }) {
  const [state, dispatch] = useReducer(clubeReducer, { lista: [], detalhes: {} });

  useEffect(() => {
    async function carregarLista() {
      const response = await fetch("/api/clubes.json");
      const data = await response.json();
      dispatch({ type: "SET_CLUBES", payload: data });
    }
    carregarLista();
  }, []);

  const carregarDetalhes = async (id) => {
    if (state.detalhes[id]) return;
    const response = await fetch(`/api/${id}.json`);
    const data = await response.json();
    dispatch({ type: "SET_DETALHES", payload: data });
  };

  return <ClubeContext.Provider value={{ clubes: state.lista, detalhes: state.detalhes, carregarDetalhes, dispatch }}>{children}</ClubeContext.Provider>;
}
