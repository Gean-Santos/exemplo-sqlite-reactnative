import React, { Component } from 'react';

import databaseInit from './src/database/init-database';

import Navigator from './src/Navigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    new databaseInit;
    console.log("initialize database");
  }
  render(){
    return ( <Navigator /> );
  }
}
