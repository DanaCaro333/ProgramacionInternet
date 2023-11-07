import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native'

export default class Inicio extends Component {
  static contextType = NavigationContext;
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context;
    const btnLogin = ()=>{
      var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
      
        if (request.status === 200) {
          console.log('success', request.responseText);
        } else {
          console.warn('error');
        }
      };
      
      request.open('GET', `https://insatiable-flap.000webhostapp.com/datos.php?nombre=${this.state.nombre}&correo=${this.state.correo}&password=${this.state.password}`);
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
              onChangeText={(nombre) => this.setState({nombre})}
            />

        <TouchableOpacity style= {styles.buttonLogin} onPress={btnLogin} >
                <Text style= {styles.txtBtn}>LOGIN</Text>
            </TouchableOpacity>
        

      <Text style={styles.SingUp}>Don't have an account? <TouchableOpacity style={{borderWidth: 0, width:60,height:20,}}>
        <Text style={{marginTop: 4, fontWeight: 'bold', color: "#184E76"}} onPress={() => navigation.navigate('Inscripcion')} >SIGN UP</Text></TouchableOpacity></Text>
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