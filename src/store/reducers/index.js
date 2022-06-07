
export function reducer(state, action){

    switch(action.type){
        
        case 'numberAdd2':
            return{...state, number:state.number+2}
        break;

        case 'numberMultiply7':
            return{...state, number:state.number*7}
        break;

        case 'numberDivide25':
            return{...state, number:state.number/25}
        break;

        case 'numberToInt':
            return{...state, number: parseInt(state.number)}
        break;

        case 'numberAddN':
            return{...state, number: state.number +action.payload}
        break;

        case 'login':
            return {...state,user:{name:action.payload}}
        break;

        default:
            return state;
    }
}