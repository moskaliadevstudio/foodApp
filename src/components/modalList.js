import React, {useContext}  from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './modalList.css';

import {orderContext} from  './context/ordercontext';

const ModalList = (props) => {

    const [listorder, setListOrders] = useContext(orderContext);

    
    return(
        <div>
            <Modal.Header className="modalHeader">
                <h3 class="modal-title w-100 text-center">Tu orden</h3>
            </Modal.Header>
            <Modal.Body>
                <ul className="mt-2">
                    {listorder.map(plato => {
                        return(
                        <li className="text-dark">{plato.cantidad}x  {plato.nombre} .......... ${plato.total}.00</li>
                        )
                    })}
                </ul>
                    <small className="lead totaltext">Total: ${props.costofinal}.00</small>
                    <br/>
                    <p className="text-dark mt-3">Detalles de la orden:</p>
                    <div className="form-group formdatos">
                        <input className="form-control col-12 mb-2" type="text" placeholder="Nombre"></input>
                        <input className="form-control col-12 inputdomilicio mb-2" type="text" placeholder="Domicilio (calle , colonia, número)"></input>
                        <textarea className="form-control comentarea" placeholder="Comentarios. (Ej: Sin cebolla, sin hielo, etc.)" rows="3"></textarea>
                    </div>
            </Modal.Body>
        </div>
    )
}  

export default ModalList;