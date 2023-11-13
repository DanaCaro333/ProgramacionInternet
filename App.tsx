/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Navigation from './Navigation';
//import Inscripcion from './Inscripcion';
//import Inicio from './Inicio';


type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {


  return (
    //<Inicio/>
    //<Inscripcion/>
    
      <Navigation/>
    
    
  );
}


export default App;