import React from 'react';
import Link from 'next/link';
import styles from './Navegation.css';

const Navegation = () => (
  <nav className="navbar navbar-expand bg-warning">
    <div className="container">
      <Link href="/"><a className="navbar-brand">TodoBitcoin</a></Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Inicio</a></Link>
            </li>
          <li className="nav-item">
            <Link href="/nosotros"><a className="nav-link">Ir a Nosotros</a></Link>
          </li>

        </div>
      </div>
    </div>
  </nav>
  // <div>
  //   <ul>
  //     <li><Link href="/"><a>Inicio</a></Link></li>
  //     <li><Link href="/nosotros"><a>Ir a Nosotros</a></Link></li>
  //   </ul>
  //   <style jsx>{`
  //     ul {
  //       background-color:#333;
  //       list-style:none;
  //       display:flex;
  //     }

  //     ul li {
  //       padding: .5rem 0;
  //       margin-right:1rem;
  //     }

  //     ul li a{
  //       font-size: 1.2rem;
  //       color:white;
  //       text-decoration:none;
  //     }
  //   `}
  //   </style>
  // </div>
);

Navegation.propTypes = {

};

export default Navegation;
