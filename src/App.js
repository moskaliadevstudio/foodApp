import React from 'react';
import './App.css';
import Slideshow from './components/slideshow';
import Header from './components/header';
import Container from 'react-bootstrap/Container'
import AccordionCards from './components/Accordion';
import FloatButton from './components/floatbutton';
import 'bootstrap/dist/css/bootstrap.min.css';
import {OrderProvider} from './components/context/ordercontext';
import {CountProvider} from './components/context/countcontext';
import {FinalordProvider} from './components/context/finalordercontx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <OrderProvider>
    <CountProvider>
    <div className="App">
      <Container>
        <Header></Header>
        <h1 id="promostext">Promociones</h1>
        <Slideshow></Slideshow>
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
        <div className="container mt-4" id="cont-menu">
          <h1 className="mt-3 display-4" id="menutext">Menú</h1>
        </div>
        <p id="pordena" className="lead text-light">¡Selecciona lo que quieras y ordena!</p>
        <AccordionCards className="mt-3"></AccordionCards>
        <FinalordProvider>
        <FloatButton></FloatButton>
        </FinalordProvider>
      </Container>
    </div>
    </CountProvider>
    </OrderProvider>
    
  );
}

export default App;
