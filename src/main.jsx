import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/Potifolio_React"  element={<Home />} />
          <Route path="/Potifolio_React/contato" element={<Contato />} />
          <Route path="/Potifolio_React/sobre" element={<Sobre />} />
          <Route path="/Potifolio_React/projetos" element={<Projetos />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
