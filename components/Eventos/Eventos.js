import React from 'react';
import styles from './Eventos.css';
import Evento from '../Evento/Evento';

const Eventos = (props) => {
  {console.log(props)}
  return    <div className="list-group">
              {props.eventos.map( (evento) => <Evento info={evento} key={evento.id}/>)}
            </div>
}

Eventos.propTypes = {

};

export default Eventos;
