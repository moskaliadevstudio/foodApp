import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Counter from './counter';
import './cardProducts.css';

const CardProducts = (props) => {
    
    return(
        <div>
            {props.datos.map(comida => {
                return( 
                    <Accordion.Collapse eventKey={props.evento}>
                        <div className="card mb-3" id="card-individual">
                        <div className="row">
                            <div className="col-md-4 container">
                                <img src={comida.urlimagen} className="img-fluid" alt="imagen del plato" id="prodimg"></img>
                            </div>
                            <div className="col-md-8">
                                <div className="mt-2 col-md-12 w-75" id="divname">
                                    <h6 className="card-title text-dark comida-nombre" style={{float:"left"}}>{comida.nombre}</h6>
                                     <p className="lead float-right" id="prec-plat">${comida.precio}.00</p>
                                </div>
                            <div className="col-12 d-block w-75">
                            <small className="text-left align-content-center d-block w-50" id="desc-plat">{comida.descripcion}</small>
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
export default CardProducts;