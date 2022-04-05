import { Action } from './actions';

//vai receber o token
export interface TokenState { //criando model
    tokens: string
}

//inicia o token vazio
const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    //variável state do tipo TokenState da minha model
    // parâmetro state: { tokens: "" }
    // parametro action: { type: "ADD_token", payload: token } 

    //analisa o type da action recebida
    switch (action.type) {
        case "ADD_Token": {
            return { tokens: action.payload }
            //se for ADD_Token, pega a informaçao recebida e atualiza tokens
        }

        default:
            return state
    }


}