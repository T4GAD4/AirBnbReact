/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker'
import {
  AppRegistry,
  StyleSheet,
  Header,
  View
} from 'react-native';

export default class ResultContainer extends Component {
  constructor(props){
      super(props);
    }

  render() {
    self = this;
    this.cards = [];

    fetch('https://www.airbnb.fr/search/search_results/?location=Lille&guests=1&checkin=2017-05-20&checkout=2017-05-30')
    .then(function(response) {
      for(let i = 0; i < response; i++){
            self.cards.push(
              <Card>
                <CardItem>
                  <Left>
                      <Body>
                          <Text>{response[i].listing.name}</Text>
                      </Body>
                  </Left>
                </CardItem>
                <CardItem>
                    <Image source={response[i].listing.picture_url}/>
                </CardItem>
                <CardItem content>
                    <Text>{response[i].pricing_quote.rate.amount} € par nuit</Text>
                </CardItem>
                <CardItem>
                    <Button transparent>
                        <Text>Voir plus</Text>
                    </Button>
              </CardItem>
            </Card>
        		)
      	}
    });

      return (
        <Container>
          <Header>
              <Body>
                <Text>Résultats de la recherche</Text>
              </Body>
          </Header>
          <Content>
            { cards }
          </Content>
        </Container>
      );
    }
}

AppRegistry.registerComponent('ResultContainer', () => ResultContainer);
