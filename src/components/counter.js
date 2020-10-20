import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './couter.css'
import {orderContext} from  './context/ordercontext';
import {countContext} from  './context/countcontext';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const [listorder, setListOrders] = useContext(orderContext);
    const [ordercount, setOrderCount]  = useContext(countContext);


    function addItem(){
        setCounter(counter+1);
        setOrderCount(ordercount+1);
        var orden = {nombre:props.nombreplat, cantidad:counter+1 , precio: props.precioplat, total:props.precioplat};
        if(listorder.length<=0){
            setListOrders(listorder.concat(orden));
        }else{
            var arrordenes = listorder;
            let  encontrado = arrordenes.find(item => item.nombre === props.nombreplat);
            if(encontrado == null){   
                setListOrders(prevOrders => [...prevOrders, orden]);
            }else{
                encontrado.cantidad = counter+1;
                var precio = parseInt(encontrado.precio);
                var cant = encontrado.cantidad;
                encontrado.total = cant * precio;
            }
        }
    }

    function removeItem(){
        if(counter<=0){
            setCounter(0);
        }else{
            setCounter(counter-1);
            setOrderCount(ordercount-1);
            var arrordenes = listorder;
            let  encontrado = arrordenes.find(item => item.nombre === props.nombreplat);
            if(encontrado == null){
                console.log('no hago nada');
            }else{
                encontrado.cantidad = counter-1;
                var precio = parseInt(encontrado.precio);
                var cant = encontrado.cantidad;
                encontrado.total = cant * precio;
                if(encontrado.cantidad <=0){
                    var indice = arrordenes.indexOf(encontrado);
                    console.log(indice);
                    arrordenes.splice(indice, 1);
                }
            }
        }
    }

    return(
    <div id="mainboton">
    <button className="mr-2" id="botonmas" onClick={addItem}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
    </button>
    <strong className="mr-2 font-weight-bold" id="cantidad">{counter}</strong>
    <button className="d-inline-block" id="boton2" onClick={removeItem}>
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
    </button>
    </div>
    );
}

export default Counter;