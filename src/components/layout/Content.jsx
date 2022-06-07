import React from "react";
import { Route,Routes } from "react-router-dom";

import Home from "../../views/examples/Home";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseState from "../../views/examples/UseState";
import UseMemo from "../../views/examples/UseMemo";
import UseReducer from "../../views/examples/UseReducer";
import NotFound from '../../views/examples/NotFound';
import UseCustom from "../../views/examples/UseCustom";

export default ()=>{

    return (
        <main className="Content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/useState' element={<UseState />} />
                <Route path='/useEffect' element={<UseEffect />} />
                <Route path='/useRef' element={<UseRef />} />
                <Route path='/useCallback' element={<UseCallback />} />
                <Route path='/useContext' element={<UseContext />} />
                <Route path='/useMemo' element={<UseMemo />} />
                <Route path='/useReducer' element={<UseReducer />} />
                <Route path='/useCustom' element={<UseCustom />} />
                <Route path='*' element={<NotFound />} />
                
            </Routes>
        </main>
    )
}