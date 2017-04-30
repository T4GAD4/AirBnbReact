/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomeContainer extends Component {
  constructor(props){
      super(props);
      this.state = {date:"2016-05-15"};
    }

  render() {
    return (
      <Container>
        <Header>
            <Body>
                <Title>AirBnb</Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item>
                <Input placeholder="Lieu" />
            </Item>
            <Item>
                <Input placeholder="Nb personnes" />
            </Item>
            <Grid>
              <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Date arrivée</Text>
                <DatePicker mode="date" date={this.state.date} style={{flex: 1}} placeholder="Date de début" format="YYYY-MM-DD" showIcon={false} onDateChange={(date) => {this.setState({date: date});}}/>
              </Col>
              <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>Date de fin</Text>
                <DatePicker mode="date" date={this.state.date} style={{flex: 1}} placeholder="Date de fin" format="YYYY-MM-DD" showIcon={false} onDateChange={(date) => {this.setState({date: date});}}/>
              </Col>
            </Grid>

            <Button block primary onPress={this.goToResult}><Text> Rechercher </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }

  goToResult = () => {
      this.props.navigator.push({
         name: 'Result',
         title: 'Result'
      });
   }
}

AppRegistry.registerComponent('HomeContainer', () => HomeContainer);
