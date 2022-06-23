import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/foto_zeneth.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imbox from './img/inbox.png';
import logoQBF from './img/logo_qfb.png';
import logoMQ from './img/logo_mqhair.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Zêneth"
          descricao="Oi, eu sou o Zêneth. Sou o estudante da Labenu. Estou em transição de carreira e atualmente trabalho no departamento fiscal/contabil e sou mãe da Lady."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

        <div className="page-section-container">
          <h2>Contato</h2>
          <CardPequeno
            imagem= {imbox}
            descricao="E-mail: zenunes250@gmail.com"
          />

          <CardPequeno
            imagem="https://sedurb.es.gov.br/Media/Sedurb/Fotos/10-single-default.jpg"
            descricao="Endereço: Rua Oliveira Alves, 266  Ipiranga, São Paulo/SP"

          />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoQBF}
          nome="QBF Accouting and Consulting"
          descricao="Auxialiar fiscal pleno!"
        />

        <CardGrande
          imagem={logoMQ}
          nome="MQ Hair Professional"
          descricao="Faturista."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />


        </div>
      </div>
  );
}

export default App;
