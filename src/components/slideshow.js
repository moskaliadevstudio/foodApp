import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slideshow = () =>{
    return(
        <Carousel>
          <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/pizza.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="chesco">Pizza 2X1</h3>
                <p>Martes y jueves únicamente</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/brocheta.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="chesco">¡Refresco gratis!</h3>
                <p>En la compra de una orden de papas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/img/pastel.jpg"
                alt="Third sside"
                />

                <Carousel.Caption>
                <h3>Moskalia Test</h3>
                <p>Probando el slideshow</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow;