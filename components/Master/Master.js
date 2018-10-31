import React from 'react';
import styles from './Master.css';
import Head from 'next/head/';
import Navegation from '../Navegation/Navegation';

class MasterPage extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      <Head> 
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Bitcoun App</title>
        <link href="https://bootswatch.com/4/slate/bootstrap.min.css" rel="stylesheet"/>
      </Head>
      <Navegation/>
      <div className="container mt-4">
        {this.props.children}
      </div>
    </div>
  )
}

export default MasterPage;
