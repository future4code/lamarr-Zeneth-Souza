import styled from 'styled-components';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coracao from '../img/coracao.png'
import Block from '../img/block.png'


function Card () {
    function Card  () {
        const [pessoa,setPessoa] = useState({})
    
        const searchProfile = () =>{
            axios
            .get(`${baseURL}/person`)
            .then((response) =>{
                console.log(response.data)
                setPessoa(response.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
        }

        useEffect(() =>{
            searchProfile()
        }, []) 

    return (
        <>
        </>
    )
}

export default Card;