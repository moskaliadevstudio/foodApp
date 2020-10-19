import React, {useState, useEffect} from 'react';
import { db } from "../firebase";
import Accordion from 'react-bootstrap/Accordion'

const CardBebidas = () => {

    const datosBebidas = {
        bebidas: []
    }
    const [drinks, setDrinks] = useState(datosBebidas);

    

    function getData(referencia = ''){
        db.ref(referencia).on("value", snapshot =>{
          let allDrinks = [];
          snapshot.forEach(snap=>{
            allDrinks.push(snap.val());
          });
          setDrinks({bebidas:allDrinks})
        })
    }

    useEffect(() => {
        getData('bebidas');
      },[])
    
    return(
        <div>
            {drinks.bebidas.map(drink => {
                return( 
                    <Accordion.Collapse eventKey="1">
                        <div className="card mb-2" id="card-individual">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={drink.urlimagen} className="img-fluid" alt="imagen del plato" id="prodimg"></img>
                            </div>
                            <div className="col-md-8">
                            <h4 className="card-title mt-2 text-dark">{drink.nombre}</h4>
                            <p>{drink.descripcion}</p>
                            <small className="lead">${drink.precio}.00</small>
                            </div>
                        </div>
                        </div>
                    </Accordion.Collapse>
                )
            })}
        </div>
    )

}
export default CardBebidas;