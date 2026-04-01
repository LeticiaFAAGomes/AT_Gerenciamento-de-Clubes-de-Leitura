import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClubeListaPage from "./pages/clubeListaPage/ClubeListaPage";
import NovoClubePage from "./pages/novoClubePage/NovoClubePage";
import SessoesClube from "./components/sessoesClube/SessoesClube";
import { ClubeProvider } from "./providers/ClubeProvider";
import DetalhesClubePage from "./pages/detalhesClubePage/DetalhesClubePage";

function App() {
  return (
    <div className='App'>
      <ClubeProvider>
        <Routes>
          <Route path='/' index element={<ClubeListaPage />} />
          <Route path='/adicionar' element={<NovoClubePage />} />
          <Route path='/clube/:id' element={<DetalhesClubePage />}>
            <Route path='sessoes' element={<SessoesClube />} />
          </Route>
        </Routes>
      </ClubeProvider>
    </div>
  );
}

export default App;
