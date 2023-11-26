import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Votar from './Votar';
import Resultado from './Resultado';




export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Inicio"
          component={Inicio}
          options={{headerShown: false}}
          />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Votar" component={Votar} />
      </Stack.Navigator>
      </NavigationContainer>

    );
  }
}