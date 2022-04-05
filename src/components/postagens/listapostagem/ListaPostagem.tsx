import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagem() {
    
    let history = useHistory();

    //criando state pra tema
    const [posts, setPosts] = useState<Postagem[]>([])

    //criando state pra token
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    //verificando se o usuário está logado
    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    //fazendo a requisição de todos os temas
    async function getPost() {
        await busca(`/postagens/all`, setPosts, {
            headers: { "Authorization": token }
            //rota | guarda a resposta da requisição | autenticação com o token 
        })
    }

    //atualizando componente caso a variável tenha alguma mudança
    useEffect(() => {
        getPost()
    }, [posts.length])
    
    return (
        <>
            {posts.map(posts => (
                <Box className="cardPostagem">
                    <Card variant="outlined" className='caixaPost'>
                        <CardContent >
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {posts.titulo}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {posts.texto}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {posts.tema?.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioPostagem/${posts.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarPostagem/${posts.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))
            }
        </>
    );
}

export default ListaPostagem;