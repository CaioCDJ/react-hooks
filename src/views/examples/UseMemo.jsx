import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a,b){

    // odeio fazer conta no js
    a = parseInt(a);
    b = parseInt(b);

    const future = Date.now() + 2000;

    // simulando um delay 
    while(Date.now() < future){} // espera 2s
    
    return a + b;
}


const UseMemo = (props) => {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    

    /* 
    * Retorna um valor memoizado, armazenado no cache
    * Apenas retorna caso um valor tenha sido modificado
    */
    const result = useMemo(() => sum(n1,n2),[n1,n2]);

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />


            <div className="center">
                <input type="number" className="input"
                    value={n1}
                    onChange={e => setN1(e.target.value)} />
                <input type="number" className="input"
                    value={n2}
                    onChange={e => setN2(e.target.value)} />
                <input type="number" className="input"
                    value={n3}
                    onChange={e => setN3(e.target.value)} />
                <span className="number">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
