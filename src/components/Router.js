import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity,
   NavigationBarRouteMapper
} from 'react-native'

import ResultContainer from './results/ResultContainer'
import HomeContainer from './home/HomeContainer'

export default class Router extends Component {
   constructor(){
      super()
   }

   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
         />
      );
   }

   renderScene(route, navigator) {
     if(route.name == 'Home') {
        return (
           <HomeContainer
              navigator = {navigator}
              {...route.passProps}
           />
        )
     }
      if(route.name == 'Result') {
         return (
            <ResultContainer
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
   }
}
