import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floatbutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import ModalList from './modalList';
import Modal from 'react-bootstrap/Modal';
import {countContext} from  './context/countcontext';
import {orderContext} from  './context/ordercontext';


const FloatButton = () => {

    const [countOrder, setCountOrder] = useContext(countContext);
    const [listorder, setListOrders] = useContext(orderContext);
    const [cost, setCost] = useState(0);

    const [show, setShow] = useState(false);
    //const handleShow = () => setShow(true);
    const handleShow = () =>{
        setShow(true);
        var orderstemp = listorder;
        var finalcost = 0;
        orderstemp.map(item => {
            finalcost = finalcost + parseInt(item.total);
            if(finalcost>0){
                setCost(finalcost);
            }else{
                setCost(0);
            }
        })
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
                    <ModalList costofinal={cost}></ModalList>
                    <Modal.Footer>
                    <button className="btnmodal" onClick={handleClose} >
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