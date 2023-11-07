import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigator } from './screens/DrawerNavigator';
import Inicio from './Inicio';
import Inscripcion from './Inscripcion';


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
        <Stack.Screen name="Inscripcion" component={Inscripcion} />
      </Stack.Navigator>
      </NavigationContainer>

    );
  }
}