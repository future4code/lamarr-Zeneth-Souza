import React from "react";

export function Etapa1(props){
   return(
    <div>
    <h1>Etapa1 - Dados Gerais</h1>
    <form>
        <p>1. Qual o seu nome?</p>
         <input type="text" name="nome"/>

        <p>2. Qual sua idade?</p>
         <input type="text" name="idade"/>

        <p>3. Qual seu e-mail?</p>
         <input type="text" name="e-mail"/>
         
        <p>4. Qual a sua escolaridade? </p> 

         <select>
            <option value="Sem Ensino Superior">Não possui/não cursa ensino superior</option>
            <option value="Com Ensino Superior">Cursa/conluiu ensino superior</option>
         </select>
    </form>
</div>
   )
}    