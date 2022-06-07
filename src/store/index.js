import { reducer } from "./reducers";
import {numberAdd2} from './actions/number';

const initilState = {
    cart: [],
    products:[],
    user: null,
    number: 0
}

export {
    reducer,
    initilState,
    numberAdd2
}