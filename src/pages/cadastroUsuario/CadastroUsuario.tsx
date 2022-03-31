import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    
    //atualiza a partir do que o usuario está digitando
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })
    
    //atualiza a partir da resposta do back-end
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })

    //quando logado, vai ser redirecionado para a página de login
    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])

    //pega o que está sendo digitado em "confirmarSenha" e atualiza o state confirmarSenha
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //função para cadastrar no banco
    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //previne de atualizar a página
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            //rota, dados do usuário, função que vai alterar os dados 
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            //com as crases, você consegue concatenar a url com parâmetros dinâmicos
            alert("Usuário cadastrado com sucesso!")
        } else {
            alert("Favor verificar as informações de cadastro.")
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagemCadastro"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={ cadastrar }>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                            className="textosCadastro">Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome" label="nome" variant="outlined" name="nome" margin="normal" required fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" type="email" required fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" required fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenha" margin="normal" type="password" required fullWidth />

                        <Box marginTop={2} textAlign="center">
                            <Link to='/login' className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="botaoCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary" className="botaoCadastrar">
                                Cadastrar
                            </Button>
                        </Box>
                        
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}

export default CadastroUsuario;