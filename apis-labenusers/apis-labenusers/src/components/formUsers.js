import axios from 'axios' 

import { useEffect, useState } from 'react'
import { ButtonAddUser, Form, FormUsers, setFormUsers, ItemFormUsers } from '../style'

const formUsers = () => {

 const [formUsers, setFormUsers] = useState([])
 const [myInput, setMyInput] = useState("")

 const atualizaInput = (event) => {
    setMyInput(event.target.value)
 }

 const componentFormUsers = formUsers.map((item, index) => {
    return (<ItemFormUsers key={index}>
       {item.name}
       {item.email}
    </ItemFormUsers>)
 })

 useEffect(() => {
    getFormUsers()
 }, [])

 const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const myHeaders = {
        headers: {
            Authorization: "Zeneth-Nunes-Lamarr"
        }
    }

    const getFormUsers = () => {
        axios.get(url, myHeaders).then((response) => {
            setFormUsers(response.data)
        }).catch(
            (erro) => {
                console.log(erro.response);
            })
    }

    const body = {
        "name": myInput
    } 

    const postFormUsers = (event) => {
        event.preventDefault()
        axios.post(url, body, myHeaders).then(() => {
            alert("Usuário Adicionado com sucesso!")
            getFormUsers()
        }).catch((erro) => {
            alert("Ops! Algo deu errado!")
        })
        setMyInput("")
    }

       
    return (
        <Form>
            <h1> Lsita de Usuários!</h1>
            <Users>
                {componentFormUsers}
            </Users>
            <FormUsers>
                <input type="text" value={myInput} onChange={atualizaInput} />
                <ButtonAddUser onClick={postFormUsers}>
                    Adicionar
                </ButtonAddUser>
                {/* <ButtonDeleteUser onClick={deleteUser}>
                    Excluir
                </ButtonDeleteUser> */}
            </FormUsers>
        </Form>
    )
}
export default formUsers;