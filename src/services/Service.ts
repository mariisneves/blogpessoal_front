import axios from 'axios';

export const api = axios.create({
    baseURL: "https://mundinhomariisneves.herokuapp.com"
})

//parâmetro (dados: any) pq vamos enviar dados para a api
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
    //a constante resposta vai fazer a requisição de acordo com os parâmetros colocados 
    setDados(resposta.data)
    //vai gravar a resposta da requisição em setDados
}

//igual ao método anterior, porém, na requisição você vai passar o ID específico
export const buscaId = async(url: any,setDados: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDados(resposta.data)
}

//cadastrar postagem e tema
export const post = async(url: any, dados: any, setDados: any, header: any) => { 
    //ex: cadastrar(`/postagens/all`, postagem, setDados, { headers: { "Authorization": token }} )
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