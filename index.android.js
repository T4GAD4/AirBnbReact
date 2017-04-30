import React, { Component } from 'react';
import {
   AppRegistry,
   View
} from 'react-native';

import Router from './src/components/Router';

class AirBnbReact extends Component {

  constructor(props) {
        super(props);
    }

   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('AirBnbReact', () => AirBnbReact)
