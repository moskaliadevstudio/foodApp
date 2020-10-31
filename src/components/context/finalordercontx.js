import React , {useState, createContext} from 'react';

export const finalorderContx =  createContext();

export const FinalordProvider = (props) => {


    const [finalorder, setFinalOrder] = useState({
        nombrecliente:'',
        domicilio: '',
        comentarios: '',
    });

    return(
        <finalorderContx.Provider value={[finalorder, setFinalOrder]}>
            {props.children}
        </finalorderContx.Provider>
    );
}

