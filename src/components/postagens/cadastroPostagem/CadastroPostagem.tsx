import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import './CadastroPostagem.css';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';

function CadastroPostagem() {

    // pra redirecionar o usuário pra outra página
    let history = useHistory();

    //vai pegar o id da url
    const { id } = useParams<{ id: string }>();
    //da pra pegar outros parâmetros também. ex: cont {usuario, senha} = useParams

    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');

    //faz uma ação quando uma variável (no caso [token]) sofre alteração
    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token]) //[token] -> é o que fala pro useEffect o que ele tem que monitorar

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        tema: null
    })

    //vai atualizando o state de postagem de acordo com o tema que o usuário está selecionando
    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    //monitora o id passado como parâmetro na url, verifica se o id existe
    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas/all", setTemas, {
            headers: { "Authorization": token }
        })
    }

    //faz uma busca na api pelo ID passado
    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: { "Authorization": token }
        })
    }

    //vai atualizando o state de postagem de acordo com o que o usuário está digitando
    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await put(`/postagens`, postagem, setPostagem, {
                    headers: { "Authorization": token }
                })
                alert('Postagem atualizada com sucesso');
            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }

        } else {
            try {
                await post(`/postagens`, postagem, setPostagem, {
                    headers: { "Authorization": token }
                })
                alert('Postagem cadastrada com sucesso');
            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor verifique a quantidade minima de caracteres")
            }

        }
        back()
    }

    function back() {
        history.push('/posts')
    }


    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPostagem;