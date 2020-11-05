import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div>
            <hr/>
            <footer>
                <div className="footer__div">
                    <img src="assets/img/logomoskultimate.png" alt="logo-MDS" className="footer__logo d-block"/>
                </div>
                <strong className="text-muted">Moskalia Dev Studio®</strong>
                <small className="d-block text-muted">Desarrollo de software, tecnología y medios digitales.</small>
                <a href="https://www.facebook.com/moskaliadevstudio" target="blank" className="ml-2 text-muted">
                    <FontAwesomeIcon icon={faFacebookSquare} id="icon"></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com/moskaliadevstudio" target="blank" className="ml-2 text-muted">    
                    <FontAwesomeIcon icon={faInstagram} id="icon"></FontAwesomeIcon>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B527444381114&text=Hola,%20quisiera%20cotizar%20un%20trabajo.&app_absent=0" target="blank" className="ml-2 text-muted">
                    <FontAwesomeIcon icon={faWhatsapp} id="icon"></FontAwesomeIcon>
                </a>
            </footer>
        </div>
    );
}

export default Footer;

