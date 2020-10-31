import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slideshow = () =>{
    return(
        <Carousel>
          <Carousel.Item>
              <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/pizza.jpg"
                alt="Third slide"
                />
              </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">Pizza 2X1</h3>
                <p className="subtitulo">Martes y jueves únicamente</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/brocheta.jpg"
                alt="Third slide"
                />
                </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">¡Refresco gratis!</h3>
                <p className="subtitulo">En la compra de una orden de papas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/pastel.jpg"
                alt="Third sside"
                />
                </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">Moskalia Test</h3>
                <p className="subtitulo">Probando el slideshow</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow;