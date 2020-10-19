import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion'
import './Accordion.css';
//MY IMPORTS
import CardComidas from './cardPlatillos';
import CardBebidas from './cardBebidas';
import {orderContext} from  './context/ordercontext';

const AccordionCards = () => {

  const [listorder, setListOrders] = useContext(orderContext);
  
  function showContext(){
    console.log(listorder);
  }
    return(
        <div>
          <button onClick={showContext}>muestra</button>
        <Accordion defaultActiveKey="0">
        <Card className="card-main">
        <Card.Header>
        <Accordion.Toggle as={Button} eventKey="0" id="toggle-acc">
        <h4 id="sec-title">Comidas</h4>
        </Accordion.Toggle>
          <CardComidas></CardComidas>
        </Card.Header>
        </Card>
        <Card className="card-main">
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="1" id="toggle-acc" >
              <h4 id="sec-title">Bebidas</h4>
            </Accordion.Toggle>
            <CardBebidas></CardBebidas>
          </Card.Header>
        </Card>
        <Card className="card-main">
          <Card.Header>
            <Accordion.Toggle as={Button}  eventKey="1" id="toggle-acc">
              <h4 id="sec-title">Postres</h4>
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        </Accordion>
        </div>

    );

   
}

export default AccordionCards;

