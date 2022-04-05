export type Action = {type: "ADD_Token"; payload: string}
                    //type -> proposito da ação
                    //payload -> informação que a action vai levar

//função addToken do tipo Action
export const addToken = (token: string): Action => ({
    type: "ADD_Token",
    payload: token,
});
