import React , {useState, createContext} from 'react';

export const countContext =  createContext();

export const CountProvider = (props) => {


    const [countOrder, setCountOrder] = useState(0);

    return(
        <countContext.Provider value={[countOrder, setCountOrder]}>
            {props.children}
        </countContext.Provider>
    );
}

