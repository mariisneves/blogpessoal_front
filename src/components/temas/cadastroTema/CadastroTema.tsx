import { Button, Container, TextField, Typography } from '@material-ui/core';
import { findByTestId } from '@testing-library/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import './CadastroTema.css'

function CadastroTema() {
    let history = useHistory();

    //captura os parâmetros (ex. id) enviados por uma url
    const { id } = useParams<{ id: string }>();

    const [token, setToken] = useLocalStorage("token");

    //inicializando esse state com valor padrão
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    //verifica se o usuário está logado
    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    //monitora o id e vê se ele foi disponibilizado
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    //fazer o get pra pegar o tema cadastrado de acordo com o id enviado na requisição
    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: { "Authorization": token }
        })
    }

    //captar valores digitados no formulário e atribuí-los ao setTema
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("Tema " + JSON.stringify(tema))

        //se existir um if, ele vai atualizar o tema
        if (id !== undefined) {
            
            console.log(tema)
            await put(`/temas`, tema, setTema, {
                headers: { "Authorization": token }
            }) 
            alert("Tema atualizado com sucesso");
        } else { //se não existir, ele vai criar um tema
            await post(`/temas`, tema, setTema, {
                headers: { "Authorization": token }
            }) 
            alert("Tema cadastrado com sucesso.");
        } back()
    }

    function back(){
        history.push("/temas")
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    );
}

export default CadastroTema;