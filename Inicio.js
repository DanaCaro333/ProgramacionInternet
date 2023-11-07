import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.fondo}>
      <Image
        style={styles.Imagen1}
        source={require("./Imagenes/VotarInicio.png")}
      />
      <View style = {styles.login}>
        <Text style={styles.txtTitle}>Votación Virtual</Text>
      <View style={styles.campoUser}>
      <Text style={styles.txtCampo}>User</Text>
      </View>

      <View style={styles.campoPassword}>
      <Text style={styles.txtCampo}>Password</Text>
      </View>

      <View style={styles.buttonLogin}>
      <Text style={styles.txtBtn}>Login</Text>
      </View>

      <Text style={styles.SingUp}>Don't have an account? Sing up</Text>
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
        marginTop:17,
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