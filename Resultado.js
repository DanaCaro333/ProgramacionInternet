import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import SlideButton from 'rn-slide-button';
import { GestureHandlerRootView } from "react-native-gesture-handler";


//Importacion de componentes

export default class Resultado extends Component {
  
  constructor(props) {
    super(props);
    this.state = {//declaracion de variables
      Visibleview: 'Iniciar',
      stateA: '',
      acuerdo: '99'
    };

  }
  showView = (nombreView)=>{
    this.setState({Visibleview: nombreView});
  }

  render() {
    //Programacion de objetos
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
    
    const handleClick = async event => {
      readAcuerdo;
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/adminL.php?Admin=1`);
      request.send();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          console.log('success Admin', request.responseText);
          checkState();
          
        } else {
          console.warn(`error: ${request.readyState} ${request.status}: ${request.statusText}`);
        }
      };
      
    };
    
    const stateCentral = () =>{
        var check = new XMLHttpRequest();
        check.open('GET', `http://192.168.1.74/2023B/conteoTotal.php/`);
        check.send();
        aux = check.onreadystatechange = (e) => {
          if(check.responseText === "1"){
            this.setState({stateA: check.responseText});
          }else{
            this.setState({stateA: "0"});
          }
        };
    };

    const checkState = async event =>{
      this.showView('Upload');
      this.setState({stateA: "0"})
      while(this.state.stateA != '1'){
        stateCentral();
        console.log('waiting');
        await delay(1000);
      }
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/adminL.php?Admin=0`);
      request.send();
      this.showView('viewResultados');
    };

    function readAcuerdo(){
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/acuerdo.php?`);
      request.send();
      aux = request.onreadystatechange = (e) => {
        if(request.responseText != "0"){
          this.setState({acuerdo: request.responseText});
        }
      };
      console.log({"vemos":acuerdo});

    };

    return (//parte visible que se mostrará
    
    <View style={styles.container}>
      {this.state.Visibleview === 'viewResultados' &&(
         <View style={styles.container}>
          <Text style={{marginTop: 45, fontSize: 30, color: '#3289a8'}}>Acuerdo #2983</Text>
          <View style={styles.container2}>
            <View style = {styles.result}>
              <Image
              style={styles.icono}
              source={require("./Imagenes/aceptar.png")}
            />
            <Text style={{fontSize: 30, color: 'black'}}>2983</Text>
            </View>
            <View style = {styles.result}>
              <Image
              style={styles.icono}
              source={require("./Imagenes/menos.png")}
            />
            <Text style={{fontSize: 30, color: 'black'}}>2983</Text>
            </View>
            <View style = {styles.result}>
              <Image
              style={styles.icono}
              source={require("./Imagenes/anular.png")}
            />
            <Text style={{fontSize: 30, color: 'black'}}>2983</Text>
            </View>

          </View>
          
          <TouchableOpacity style= {styles.btn_siguiente} onPress={handleClick}>
          <Text style={{fontSize: 30, color: 'black'}}>siguiente acuerdo</Text>
          </TouchableOpacity>

        </View>
      )}

      {this.state.Visibleview === 'Iniciar' &&(
        <View style={styles.upload}>
          <Text style={{marginTop: 85, fontSize: 30, color: '#3289a8'}}>Acuerdo #2984</Text>
          <Image
          style={styles.icono2}
          source={require("./Imagenes/votar.png")}
        />
        <TouchableOpacity style= {styles.btn_siguiente} onPress={handleClick}>
          <Text style={{fontSize: 20, color: 'black'}}>Iniciar votaciones</Text>
          </TouchableOpacity>
        </View>

      )}


      {this.state.Visibleview === 'Upload' &&(
        <View style={styles.upload}>
          <Text style={{marginTop: 85, fontSize: 30, color: '#3289a8'}}>Acuerdo {this.state.acuerdo}</Text>
          <Image
          style={styles.icono2}
          source={require("./Imagenes/votar.png")}
        />
        </View>

      )}

    </View>
    );
  }
}

//styles
const styles = StyleSheet.create({
    result: {
      marginRight:30,
      marginTop: 40,
      flexDirection: "row",
      flex: 1,
      justifyContent: "spacing",
    },
    upload:{
      flex: 1,
      width: 500,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: "#82C9FF",
    },
    container:{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: "white",
    },
    container2:{
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#82C9FF",
      width: 350,
      height: 300,
      borderRadius: 15,
    },

    touchable:{
      width: 300,
      height: 40,
      borderRadius: 8,
      borderColor: 'black',
      backgroundColor: 'white',
      marginTop: 25,
      alignItems: 'center',
      marginBottom: 25,
      borderWidth: 1,
    },
    icono:{
      width:50,
      height:50,
      marginRight:20
    },
      icono2:{
        marginTop: 120,
        marginLeft:25,
        width:200,
        height:200,
        alignItems: 'center',
    },
    btn_siguiente:{
      width: 300,
      height: 60,
      borderRadius: 8,
      borderColor: '#6D6D6D',
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      marginTop: 35,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 3,
    },
});