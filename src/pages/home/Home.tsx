import React from 'react';
import { Paper, Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';
import theater from '../../assets/theater.png';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#D88B56" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#5A3A82", backgroundColor: "#5A3A82", color: "white" }} className="buttonHome">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className="img-grid">
                    <Box className="img">
                        <img src={theater} alt="Máscaras que representam o teatro" height="350px" />
                    </Box>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;