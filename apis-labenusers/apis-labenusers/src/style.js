import styled from "styled-components";

export const FormUsers=styled.form`
    margin-top: 3vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
    text-align: center;
    row-gap: 2vh;
    input{
        border: 1px solid black;
        border-radius: 5px;
        grid-column-start: 1;
        grid-column-end: 3;
        font-size: 1.5vw;
        padding: 0.3vh 0.5vw;
    }

`

export const ButtonAddUser=styled.button`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-color: green;
    border-radius: 0.4vw;
    :active{
        background-color: lightcyan;
        color: black;
    }
`
export const ButtonDeleteUser=styled.button`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-color: orangered;
    border-radius: 0.4vw;
    :active{
        background-color: lightcyan;
        color: black;
    }
`