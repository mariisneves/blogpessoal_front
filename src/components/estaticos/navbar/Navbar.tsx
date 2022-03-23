import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className="bg-navbar">
                    <Box style={{ cursor: "pointer" }} marginX={2}>
                        <Typography variant="h5" color="inherit" className="title">
                            mundinho mariisneves
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" className="menu">
                        <Box mx={1} style={{ cursor: "pointer" }} marginX={2}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} marginX={2}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} marginX={2}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} marginX={2}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} marginX={2}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;