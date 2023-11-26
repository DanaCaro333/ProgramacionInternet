import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native'
export default class Inicio extends Component {
  static contextType = NavigationContext;
  
  constructor(props) {
    super(props);
    this.state = {
      nombre:'',
      password:'',
    };

  }

  render() {
    const navigation = this.context;
    // var VaciaDB = new XMLHttpRequest();
    // VaciaDB.open('GET', `https://proyecto3286547.000webhostapp.com/2023B/start.php`);
    // VaciaDB.send();
    const btnLogin = ()=>{
      var request = new XMLHttpRequest();
      var update = new XMLHttpRequest();
      // request.onerror = (e) => {
      //   console.warn(`Hubo un pedote!!: ${e.statusText}`);
      // };

      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
      
        if (request.status === 200) {
          console.log('success', request.responseText);
        } else {
          console.warn(`error: ${request.readyState} ${request.status}: ${request.statusText}`);
        }

        if(request.responseText === "-1"){
          Alert.alert("Password o Nombre incorrecto, intenta de nuevo");
        }
        else if(request.responseText === "1"){
          navigation.navigate('Resultado');
        }else if(request.responseText === "0"){
          update.open('GET', `http://192.168.1.74/2023B/total.php`);
          update.send();
          navigation.navigate('Votar');
        }else{
          console.log({nombre:request.responseText})
        }
      };

      request.open('GET', `http://192.168.1.74/2023B/entrar.php/?Nombre=${this.state.nombre}&Password=${this.state.password}`);
      //request.open('GET', `https://proyecto3286547.000webhostapp.com/2023B/entrar.php/?Nombre=${this.state.nombre}&Password=${this.state.password}`);
      request.send();
    }

    return (
      <View style = {styles.fondo}>
      <Image
        style={styles.Imagen1}
        source={require("./Imagenes/VotarInicio.png")}
      />
      <View style = {styles.login}>
      <Text style={styles.txtTitle}>Votación Virtual</Text>
      <TextInput style={styles.campoUser}
            placeholder='User'
            onChangeText={(nombre) => this.setState({nombre})}
          />
        <TextInput style={styles.campoPassword}
              placeholder='Password'
              onChangeText={(password) => this.setState({password})}
            />

        <TouchableOpacity style= {styles.buttonLogin} onPress={btnLogin} >
                <Text style= {styles.txtBtn}>LOGIN</Text>
            </TouchableOpacity>
        
      </View>
      </View>
    );
  }
}

//seccion estilos
const styles = StyleSheet.create({
    campoPassword:{
        width:250,
        height:40,
        borderWidth:2,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:40,
        marginLeft:80,
        marginTop:10,
    },
    campoUser:{
        width:250,
        height:40,
        borderWidth:2,
        borderColor:"#FEF8AE",
        backgroundColor:"#FEF8AE",
        borderRadius:40,
        marginLeft:80,
        marginTop:10,
    },
    txtTitle:{
        fontSize:20,
        textAlign:"center",
        fontWeight: 'bold',
        marginTop:20,
        fontSize: 32,
    },
    login:{
        width:400,
        height:270,
        borderWidth:2,
        borderColor:"#82C9FF",
        backgroundColor:"#82C9FF",
        borderRadius:30,
        marginLeft:7,
        marginTop:30,
    },
    fondo:{
        backgroundColor:"white",
        height:100,
    },
    Imagen1:{
        width:300,
        height:300,
        marginLeft:50,
        marginTop:50,
    },

    SingUp:{
        textAlign:"center",
        marginTop:12,
        color: "white"
    },

    txtCampo:{
        textAlign:"left",
        marginLeft:10,
        marginTop:8,
        opacity: 0.3,
        fontWeight: 'bold',
        fontSize:15,
    },

    buttonLogin:{
        width:100,
        height:40,
        borderWidth:2,
        borderColor:"#0771C0",
        backgroundColor:"#0771C0",
        borderRadius:40,
        alignItems: "center",
        marginLeft:150,
        marginTop:20,
    },

    txtBtn:{
        textAlign:"left",
        color:"white",
        marginLeft:5,
        marginTop:8,
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize:15, 
    }
})