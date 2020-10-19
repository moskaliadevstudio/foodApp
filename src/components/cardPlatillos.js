import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../firebase";
import Accordion from 'react-bootstrap/Accordion'
import Counter from './counter';
import './cardPlatillos.css';

const CardComidas = () => {

    const datosComidas = {
        comidas: []
    }
    const [foods, setComidas] = useState(datosComidas);

    function getData(referencia = ''){
        db.ref(referencia).on("value", snapshot =>{
          let allComidas = [];
          snapshot.forEach(snap=>{
            allComidas.push(snap.val());
          });
          setComidas({comidas:allComidas})
        })
    }
    
    useEffect(() => {
        getData('platillos');
      },[])
    
    return(
        <div>
            {foods.comidas.map(comida => {
                return( 
                    <Accordion.Collapse eventKey="0">
                        <div className="card mb-2" id="card-individual">
                        <div className="row">
                            <div className="col-md-4 container">
                                <img src={comida.urlimagen} className="img-fluid" alt="imagen del plato" id="prodimg"></img>
                            </div>
                            <div className="col-md-8">
                                <div className="container col-12 mt-2" id="divname">
                                    <h6 className="card-title text-dark" style={{float:"left"}}>{comida.nombre}</h6>
                                     <p className="lead" id="prec-plat">${comida.precio}.00</p>
                                </div>
                            <div className="col-12 d-block">
                            <small className="text-justify align-content-center d-block" id="desc-plat">{comida.descripcion}</small>
                            </div>
                            <Counter nombreplat={comida.nombre} precioplat={comida.precio}></Counter>
                            </div>
                        </div>
                        </div>
                    </Accordion.Collapse>
                )
            })}
        </div>
    )

}
export default CardComidas;