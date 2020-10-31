import React, {useContext}  from 'react';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './modalList.css';

import {orderContext} from  './context/ordercontext';
import {finalorderContx} from './context/finalordercontx';


const ModalList = (props) => {

    const [finalorder, setFinalOrder] = useContext(finalorderContx);
    const [listorder, setListOrders] = useContext(orderContext);

    const changeData = (e) => {
        const{name,value} = e.target;
        setFinalOrder({...finalorder, [name]:value});
    }

    
    var arrorders = [];
    arrorders = listorder;

    if(arrorders.length <= 0){
        return(
            <div>
            <Modal.Header className="modalHeader">
                <h3 class="modal-title w-100 text-center">Tu orden</h3>
            </Modal.Header>
            <Modal.Body>
                <p className="lead text-center" >Orden vacía :(</p>
            </Modal.Body>
            </div>
        )
    }else{
        return(
        <div>
                <Modal.Header className="modalHeader">
                    <h3 class="modal-title w-100 text-center">Tu orden</h3>
                </Modal.Header>
                <Modal.Body>
                    
                    <div>
                        <ul className="mt-2">
                        {listorder.map(plato => {
                            return(
                            <li className="text-dark">{plato.cantidad}x  {plato.nombre} .......... ${plato.total}.00</li>
                            )
                        })}
                        </ul>
                        <small className="lead totaltext">Total: ${props.costofinal}.00</small>
                        <br/>
                    </div>
                        <p className="text-dark mt-3">Detalles de la orden:</p>
                        <div className="form-group formdatos">
                            <input 
                                className="form-control col-12 mb-2" 
                                type="text" 
                                placeholder="Nombre" 
                                onChange={changeData} 
                                name="nombrecliente"
                            />
                            <input 
                                className="form-control col-12 inputdomilicio mb-2" 
                                type="text" 
                                placeholder="Domicilio (calle , colonia, número)" 
                                onChange={changeData} 
                                name="domicilio"
                            />
                            <textarea 
                                className="form-control comentarea" 
                                placeholder="Comentarios. Ej: Sin cebolla, sin hielo, etc. (opcional)" 
                                rows="3" 
                                onChange={changeData} 
                                name="comentarios"
                            />
                        </div>
                </Modal.Body>
                    </div> 
        )
    }
}  

export default ModalList;