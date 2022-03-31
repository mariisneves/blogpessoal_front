import axios from 'axios';

export const api = axios.create({
    baseURL: "https://mundinhomariisneves.herokuapp.com"
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

//método que será utilizado por Tema e Postagem
export const busca = async(url: any, setDados: any, header: any) => {
    //rota onde vai listar as postagens | vai gravar os dados | header vai passar o token pra autenticar
    const resposta = await api.get(url, header)
    //vai atribuir os dados da resposta na variável resposta    
    setDados(resposta.data)
}

//igual ao método anterior, porém, na requisição você vai passar o ID específico
export const buscaId = async(url: any,setDados: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDados(resposta.data)
}

//cadastrar postagem e tema
export const post = async(url: any, dados: any, setDados: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDados(resposta.data)
}

//atualizar postagem e tema
export const put = async(url: any, dados: any, setDados: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDados(resposta.data)
}

//deletar postagem e tema
export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}