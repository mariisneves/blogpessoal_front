import React from 'react';
import { Paper, Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';
import theater from '../../assets/theaterMasks.png';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid item container direction="row" justifyContent="center" alignItems="center" className="background">
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={20} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo txtSombra">Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo txtSombra">expresse aqui os seus pensamentos e opiniões sobre o teatro musical!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                            </Box>
                            <Button variant="outlined" className="botaoHome">Ver Postagens</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className="imgHome">
                        <Box className="img">
                            <img src={theater} alt="Máscaras que representam o teatro" height="430px"/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>

            </Grid>
        </>
    );
}

export default Home;