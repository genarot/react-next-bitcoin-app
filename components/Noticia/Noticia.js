import React from 'react';
import styles from './Noticia.css';

const Noticia = (props) => {
const {title,url,urlToImage, description, source} = props.noticia;
let imagen;
if ( !urlToImage) {
  imagen= <p className="text-center my-5">Imagen no disponible</p>
} else {
  imagen = <img className="card-img-top my-1" src={urlToImage} alt={title}/>
}
return   <div className="card bg-white col-md-6 col-12 mb-4">
            <div className="card-image">
              {imagen}
            </div>
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description} </p>
              <p className="card-text">{source.name}</p>
              <a href={url} target="_blank"  className="btn btn-info d-block">
                Leer mas
              </a>
            </div>
        </div>  
}

Noticia.propTypes = {

};

export default Noticia;
