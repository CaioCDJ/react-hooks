import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
    // por algum motivo nao funciona
    //const {state,setState} = useContext(DataContext);

    const context = useContext(DataContext);

    function addNumber(delta){
        context.setState({
            ...context.state,
            number:context.state.number + delta
        });
    }
    
    const context2 = useContext(AppContext);
    
    useEffect(function(){
        if(context2.number> 1250){
            context2.setText('Eita');
        }
    },[context2.number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="exercicio #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            
                <div>
                    <button className="btn"
                        onClick={()=>addNumber(-1)}>-1</button>
                    <button className="btn"
                        onClick={()=>addNumber(1)}>+1</button>
                </div>
            </div>  
            <SectionTitle title="exercicio #02"/>
            <span className="text">{context2.text}</span>
            <div className="center">
                <span className="text">{context2.number}</span>
                <div>
                    <button className="btn"
                        onClick={()=> context2.setNumber(context2.number -1)}>-1</button>
                    <button className="btn" 
                        onClick={()=> context2.setNumber(context2.number +1)}>+1</button>
                    
                </div>
            </div>
        </div>
    )
}

export default UseContext
