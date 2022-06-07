import { reducer } from "../reducers"

export function numberAdd2 (dispatch){
    /*
    * Exemplo de requisicao e useReducer
    */
    fetch('url')
        .then(resp=> resp.json())
        .then(json=> dispatch({type:'algo',payload:json})) 
    
    dispatch({type:'numberAdd2'})
}