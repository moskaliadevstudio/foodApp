import React from 'react';
import './App.css';
import Slideshow from './components/slideshow';
import Header from './components/header';
import Container from 'react-bootstrap/Container'
import AccordionCards from './components/Accordion';
import FloatButton from './components/floatbutton';

import {OrderProvider} from './components/context/ordercontext';
import {CountProvider} from './components/context/countcontext';

function App() {

  return (
    <OrderProvider>
    <CountProvider>
    <div className="App">
      <Container>
        <Header></Header>
        <h1 id="promostext">Promociones</h1>
        <Slideshow></Slideshow>
        <div className="container mt-4" id="cont-menu">
          <h1 className="mt-3" id="menutext">Menú</h1>
        </div>
        <p id="pordena" className="lead text-light">¡Selecciona lo que quieras y ordena!</p>
        <AccordionCards className="mt-3"></AccordionCards>
        <FloatButton></FloatButton>
      </Container>
    </div>
    </CountProvider>
    </OrderProvider>
    
  );
}

export default App;
