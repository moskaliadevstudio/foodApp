import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import './Entregas.css';

const Entregas = () =>{
    return(
        <div>
            <div className="mt-3 container-zonas container mt-3">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-3 icono-zona"/>
            <h4 className="heading-5 d-inline" id="zonastext">Zonas de entrega</h4>
            </div>
            <ul className="text-light mt-3 lead text-center">
                <li>Colonia "Rosales"</li>
                <li>Pedregal de las lomas</li>
                <li>Zona centro</li>
                <li>Bosques de las lomas</li>
            </ul>
        </div>
    );
}

export default Entregas;