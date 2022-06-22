import fotoZeneth from './img/foto_zeneth.png';
import './App.css';

function App() {
  function mensagem(){
    alert("O botão foi apertado!");
  }
  return (
    <div className="App">
      <h1>Bem vindo ao meu primeiro projeto React!</h1>
      <img className="img-foto" src={fotoZeneth} alt="Foto Zeneth" />
      <button onClick={mensagem}>Clique aqui!</button>
    </div>
  );
}

export default App;
