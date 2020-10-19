import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floatbutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import ModalList from './modalList';
import Modal from 'react-bootstrap/Modal';
import {orderContext} from  './context/ordercontext';
import {countContext} from  './context/countcontext';

const FloatButton = () => {

    const [listorder, setListOrders] = useContext(orderContext);
    const [countOrder, setCountOrder] = useContext(countContext);

    const [show, setShow] = useState(false);
    //const handleShow = () => setShow(true);
    const handleShow = () =>{
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return(
        <div>
            <button id="homestatic"  onClick={handleShow}>
            <FontAwesomeIcon icon={faUtensils} id="icon"></FontAwesomeIcon>
            <br></br>
            <p id="smallnumber">{countOrder}</p>
            </button>
                <Modal show={show} className="modalMain">
                    <ModalList></ModalList>
                    <Modal.Footer>
                    <button className="btnmodal" onClick={handleClose}>
                        Cerrar
                    </button>
                    <button className="btnmodal btnordenar">
                        Ordenar
                    </button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default FloatButton;