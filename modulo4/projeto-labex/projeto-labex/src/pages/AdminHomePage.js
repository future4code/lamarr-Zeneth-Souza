import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateTripPage from './CreateTripPage';
import LoginPage from './LoginPage';
import TripDetailsPage from './TripDetailsPage';
import axios from 'axios';

 const AdminHomePage = () => {

  const history = useNavigate ()
  const goBack = () =>{
  history.goBack()
}

const goToCriarViagem = () =>{
  history.push("/createtripage")  
}


const goToLogout = () => {
  history.push("/loginpage")
}





    return (
      <div>
      
      <h1>Painel Administrativo</h1>
      
      <button onClick={goBack}>voltar</button>
      <button onClick={goToCriarViagem}>Criar Viagem</button>
      <button onClick={goToLogout}>Logout</button>
      

      </div>
    );
  }
  
  export default AdminHomePage;