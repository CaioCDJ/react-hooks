import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { reducer,initilState } from '../../store';
import { numberAdd2,login } from '../../store/actions';
// use reducer = useState Customizado

/*
*   -- Desafio --
*
* Multiplicar por 7
* Dividir por 25
* Transformar numero em inteiro
* Adicionar um numero qualquer
*/ 


const UseReducer = (props) => {
    
    const [state,dispatch] = useReducer(reducer,initilState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user?
                    <span className='text'>{state.user.name}</span>
                    : <span className='text'>Seu Usuario</span>
                }
              
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={()=>login(dispatch,'Oliver')}>
                            Login
                        </button>
                    <button className="btn"
                        onClick={()=>numberAdd2(dispatch)}>+2</button>
                </div>

                {/* -- Exercicio --  */}
                <div>
                    <button className="btn"
                        onClick={()=>dispatch({type:'numberMultiply7'})}>
                            x7
                    </button>
                    <button className="btn"
                        onClick={()=>dispatch({type:'numberDivide25'})}>
                            /25
                    </button>
                    <button className="btn"
                        onClick={()=>dispatch({type:'numberToInt'})}>
                            Int
                    </button>
                    <button className="btn"
                        onClick={()=>dispatch({type:'numberAddN', payload:11})}>
                            +11
                        </button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer