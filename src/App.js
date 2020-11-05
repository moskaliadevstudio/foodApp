import React from 'react';
import './App.css';
import Slideshow from './components/slideshow';
import Entregas from './components/Entregas';
import Header from './components/header';
import Container from 'react-bootstrap/Container'
import AccordionCards from './components/Accordion';
import FloatButton from './components/floatbutton';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {OrderProvider} from './components/context/ordercontext';
import {CountProvider} from './components/context/countcontext';
import {FinalordProvider} from './components/context/finalordercontx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <OrderProvider>
    <CountProvider>
    <div className="App">
      <Container>
        <Header/>
        <Slideshow/>
        <Entregas/>
        <div className="container mt-4" id="cont-menu">
          <h1 className="mt-3 display-4" id="menutext">Menú</h1>
        </div>
        <small id="pordena" className="h6 text-light">¡Selecciona lo que quieras y ordena!</small>
        <AccordionCards className="mt-3"></AccordionCards>
        <FinalordProvider>
        <FloatButton></FloatButton>
        </FinalordProvider>
        <Footer className="mt-3"/>
      </Container>
    </div>
    </CountProvider>
    </OrderProvider>
    
  );
}

export default App;
