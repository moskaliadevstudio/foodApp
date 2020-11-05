import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slideshow = () =>{
    return(
    <div>
        <div id="div-promos-title">
            <h3 id="promostext">Promociones:</h3>
        </div>
    <Carousel>
          <Carousel.Item>
              <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/combocla.jpg"
                alt="Third slide"
                />
              </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">¡Combo Clásico $45.00!</h3>
                <p className="subtitulo">Solo de lunes a Viernes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/papasxd.jpg"
                alt="Third slide"
                />
                </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">¡Orden de papas 2x1!</h3>
                <p className="subtitulo">En la compra de dos combos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="divimg">
                <img
                className="d-block w-100 imgpromo"
                src="assets/img/comboam.jpeg"
                alt="Third sside"
                />
                </div>
                <Carousel.Caption>
                <h3 className="titulo-promo">¡Promo amigos!</h3>
                <p className="subtitulo">Sabados apartir de las 8 pm</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Slideshow;