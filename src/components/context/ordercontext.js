import React , {useState, createContext} from 'react';

export const orderContext =  createContext();

export const OrderProvider = (props) => {


    const [listorder, setListOrders] = useState([]);

    return(
        <orderContext.Provider value={[listorder, setListOrders]}>
            {props.children}
        </orderContext.Provider>
    );
}

