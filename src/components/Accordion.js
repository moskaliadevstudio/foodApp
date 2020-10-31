import React, {useState, useEffect} from 'react';
import { db } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'font-awesome/css/font-awesome.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion'
import './Accordion.css';
//MY IMPORTS
import CardProducts from './cardProducts';

const AccordionCards = () => {

  const datosComidas = {
    comidas: [],
    bebidas: [],
    extras: []
  }
  const [foods, setComidas] = useState(datosComidas);
  const [drinks, setDrinks] = useState(datosComidas);
  const [extras, setExtras] = useState(datosComidas);

  function getData(referencia = ''){
      db.ref(referencia).on("value", snapshot =>{
        let allComidas = [];
        snapshot.forEach(snap=>{
          allComidas.push(snap.val());
        });
        setComidas({comidas:allComidas})
      })
  }
  function getDataDrinks(referencia = ''){
      db.ref(referencia).on("value", snapshot =>{
        let alldrinks = [];
        snapshot.forEach(snap=>{
          alldrinks.push(snap.val());
        });
        setDrinks({bebidas:alldrinks})
      })
  }
  function getDataExtras(referencia = ''){
      db.ref(referencia).on("value", snapshot =>{
        let allextras = [];
        snapshot.forEach(snap=>{
          allextras.push(snap.val());
        });
        setExtras({extras:allextras})
      })
  }

  useEffect(() => {
      getData('platillos');
      getDataDrinks('bebidas');
      getDataExtras('extras');
  },[])

  var eventfoods = "0";
  var eventextras = "1";
  var eventobebidas = "2";

    return(
        <div>
        <Accordion defaultActiveKey="0">
        <Card className="card-main">
        <Card.Header>
        <Accordion.Toggle as={Button} eventKey="0" id="toggle-acc">
        <h4 id="sec-title">Comidas</h4>
        </Accordion.Toggle>
          <CardProducts datos = {foods.comidas} evento={eventfoods}></CardProducts>
        </Card.Header>
        </Card>
        <Card className="card-main">
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="1" id="toggle-acc" >
              <h4 id="sec-title">Complementos</h4>
            </Accordion.Toggle>
            <CardProducts datos = {extras.extras} evento={eventextras}></CardProducts>
          </Card.Header>
        </Card>
        <Card className="card-main">
          <Card.Header>
            <Accordion.Toggle as={Button}  eventKey="2" id="toggle-acc">
              <h4 id="sec-title">Bebidas</h4>
            </Accordion.Toggle>
            <CardProducts datos = {drinks.bebidas} evento={eventobebidas}></CardProducts>
          </Card.Header>
        </Card>
        </Accordion>
        </div>

    );

   
}

export default AccordionCards;