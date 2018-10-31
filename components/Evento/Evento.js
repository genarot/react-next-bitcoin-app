import React from 'react';
import styles from './Evento.css';

const Evento = (props) => {
  const {url, name, description} = props.info;
  let desc= description.text;
  if ( desc) {
    desc = desc.substr(0,180) + '...';
  }
  return <a href={url} target="_blank" className="list-group-item bg-primary active mb-1">
          <h3 className="mb-3">{name.text}</h3>
          <p className="mb-1">{desc}</p>
        </a>
}

Evento.propTypes = {

};

export default Evento;
