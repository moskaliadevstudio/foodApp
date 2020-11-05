import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './floatbutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import ModalList from './modalList';
import Modal from 'react-bootstrap/Modal';
import {countContext} from  './context/countcontext';
import {orderContext} from  './context/ordercontext';
import {finalorderContx} from  './context/finalordercontx';


const FloatButton = () => {

    const [countOrder, setCountOrder] = useContext(countContext);
    const [listorder, setListOrders] = useContext(orderContext);
    const [finalorder, setFinalOrder] = useContext(finalorderContx);
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

    function enviaOrden(){
        let emojifood = String.fromCodePoint(0x1F37D);
        let emojihello = String.fromCodePoint(0x1F44B);
        let emojimoney = String.fromCodePoint(0x1F4B8);
        let emojiclient = String.fromCodePoint(0x1F464);
        let emojilocation = String.fromCodePoint(0x1F4CC);
        let emojicomment = String.fromCodePoint(0x1F4AC);
        let emojispark = String.fromCodePoint(0x2728);
        let mensaje = emojihello + ' ' + '¡Hola Restaurante! Esta es mi orden: ' + '%0A%0D';
        
        let arrproducts = listorder;
        arrproducts.map(product => {
            mensaje += '%0A%0D' + emojifood + product.cantidad + 'x' + ' ' + product.nombre + ' - ' + '$' + product.total;
        });
        var urlp1 = 'https://api.whatsapp.com/send?phone=527443496943&text=' + mensaje +  '%0A%0D';
        if(finalorder.comentarios != '' || finalorder.comentarios != ' '){
            var urlp2 = urlp1 + emojimoney + ' Total: ' + '$' +cost + '%0A%0D' + '%0A%0D'
                        + 'Datos de envío: ' + '%0A%0D' + emojiclient +' Nombre del cliente: ' 
                        + finalorder.nombrecliente + '%0A%0D' + emojilocation +' Dirección de envío: ' + 
                        finalorder.domicilio + '%0A%0D' + emojicomment +' Comentarios: ' 
                        + finalorder.comentarios + '%0A%0D' + '¡Gracias!' + emojispark + '&data=&app_absent=';
            console.log(mensaje);
        }else{
            var urlp2 = urlp1 + emojimoney + ' Total: ' + '$' +cost + '%0A%0D' + '%0A%0D'
                        + 'Datos de envío: ' + '%0A%0D' + emojiclient +' Nombre del cliente: ' 
                        + finalorder.nombrecliente + '%0A%0D' + emojilocation +' Dirección de envío: ' + 
                        finalorder.domicilio + '%0A%0D' + '¡Gracias!' + emojispark + '&data=&app_absent=';
        }
        window.open(urlp2);
    }

    const handleSendOrder = () => {
        //var letters = /^[A-Za-z]+$/; //No se está usandp
        /*if(finalorder.nombrecliente === '' || finalorder.domicilio === '' || 
         !finalorder.nombrecliente.match(letters)){
            console.log('empty input');
        }else{
            enviaOrden();
            setTimeout(function(){ window.location.reload() }, 3000);
        }*/
        if(finalorder.nombrecliente === '' || finalorder.domicilio === '' || 
            finalorder.nombrecliente === ' '){
            console.log('empty input');
        }else{
            enviaOrden();
            setTimeout(function(){ window.location.reload() }, 3000);
        }
    }

    var temporders = [];
    temporders = listorder;

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
                    <button className="btnmodal" 
                            onClick={handleClose} >
                        Cerrar
                    </button>
                    {temporders.length>0 && 
                        <div>
                            <button className="btnmodal btnordenar" 
                            onClick={handleSendOrder}
                            >
                            Ordenar
                            </button>
                        </div>
                    }
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default FloatButton;