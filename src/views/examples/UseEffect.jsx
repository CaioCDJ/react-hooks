import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n) {
    
    if(n<0) return -1
    if(n===0) return 1
    return calcFatorial(n-1) * n ;
}

function parOuImpar(n) {
    
    if(n%2 === 0){
        return 'par'
    }else{
        return 'impar'
    }
}


const UseEffect = (props) => {

    const [number,setNumber] = useState(1);
    const [fatorial,setFatorial] = useState(1);

    // Utiliza funcoes dentro da renderizacao
    // sem causar loops 
    // Efeito colateral causado pelo estado
    useEffect(function(){

        setFatorial(calcFatorial(number));
    
    },[number]);

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "eita";
        }
    },[fatorial])

    // -- Exercicio 2  --
    const [ParOuImp,setParOuImp] = useState();

    useEffect(function(){
        setParOuImp(parOuImpar(number));
    },[number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exericicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e=>setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exericicio #02"/>

            <div className="center">
                <div>
                    <span className='text red'>{ParOuImp}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
