import React from 'react';
import styles from './Noticias.css';
import Noticia from '../Noticia/Noticia';

class Noticias extends React.Component {
  static propTypes = {

  }
  renderNoticias = () => {
    // if( !this.props.noticias) return null;

    return <React.Fragment >
              {
                this.props.noticias.map( (noticia)  => {
                  return <Noticia key={noticia.url} noticia={noticia} />
                })
              }
          </React.Fragment  >;
  }
  render = () => (
    <div className="row">
      {this.renderNoticias()}
    </div>
  )
}

export default Noticias;
