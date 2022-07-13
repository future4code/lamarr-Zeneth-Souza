import React from "react";
import { Etapa2 } from "./components/Etapa2";
import { Etapa1 } from './components/Etapa1-DadosGerais';
import { Etapa3 } from "./components/Etapa3";
import { Final } from './components/Final';



function App() {
  return (
    <div className="App">
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Final/>
    </div>
  );
}

export default App;
