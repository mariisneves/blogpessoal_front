import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems="center">
            <Grid item xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                             className="textosLogin">Entrar</Typography>
                        <TextField id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className="botaoLogin">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Ainda não tem uma conta?
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom align="center" className="textosLogin">Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className="imagem">
            </Grid>
        </Grid>
    );

}

export default Login;