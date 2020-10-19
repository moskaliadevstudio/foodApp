import React, {useContext, useState}  from 'react';
import Modal from 'react-bootstrap/Modal'
import './modalList.css';

import {orderContext} from  './context/ordercontext';

const ModalList = () => {

    const [listorder, setListOrders] = useContext(orderContext);
    const [cuenta, setCuenta] = useState(0);
    
    var temparr = listorder;
    var cuentafinal = 0;
    
    for(let i=0;i<temparr.length;i++){
        cuentafinal = cuentafinal + temparr[i].total;
    }

    return(
        <div>
            <Modal.Header className="modalHeader">
                <h3 class="modal-title w-100 text-center">Tu orden</h3>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {listorder.map(plato => {
                        return(
                        <li>{plato.cantidad}x  {plato.nombre} .......... ${plato.total}.00</li>
                        )
                    })}
                    <strong>Total: ${cuenta}.00</strong>
                </ul>
            </Modal.Body>
        </div>
    )
}  

export default ModalList;