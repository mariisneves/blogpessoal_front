import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    // data: string; -> não coloca na model pq o backend vai preencher
    tema?: Tema | null; //campo com ponto de interrogação -> pode ser omitido
}

export default Postagem;