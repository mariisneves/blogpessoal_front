import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import './DeletarTema.css';
import Tema from '../../../models/Tema';


function DeletarTema() {

    let history = useHistory();

    const { id } = useParams<{ id: string }>();

    const [token, setToken] = useLocalStorage("token");

    const [tema, setTema] = useState<Tema>()

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

    //confirmação de exclusão: se sim, vai excluir o tema
    function sim() {
        history.push("/temas")
        deleteId(`/temas/${id}`, {
            headers: { "Authorization": token }
        });
        alert("Tema deletado com sucesso.");
    }

    //confirmação de exclusão: se não, vai voltar pra página de temas
    function nao(){
        history.push("/temas")
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>
                            <Typography color="textSecondary">
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;