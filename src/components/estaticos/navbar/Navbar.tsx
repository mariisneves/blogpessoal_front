import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let history = useHistory();
    const dispatch = useDispatch();

    //substituindo o token por um valor vazio
    function goLogout() {
        //mudado o estado do token para vazio, e assim faz o logout
        dispatch(addToken(''));
        toast.info("Usuário deslogado.", {
            position: "top-right", //posição do alerta
            autoClose: 2000, //tempo da notificação na tela
            hideProgressBar: false, //se aparece barra de progresso
            closeOnClick: true, //se aparece o X para fechar a notificação
            pauseOnHover: true, //se passar o mouse em cima, o tempo para fechar congela
            draggable: false, //se pode mover a notificação de local
            theme: "colored", // visual
            progress: undefined, 
        });
        history.push("/login")
    }

    var navbarComponent;

    //se houver um token, ele renderiza a navbar
    if (token !== "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" className="bg-navbar">
                <Box className="cursor">
                    <Typography variant="h5" color="inherit" className="title">
                        mundinho mariisneves
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start" className="menu">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className="cursor" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>

    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;