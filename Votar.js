import { func } from 'prop-types';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

//Importacion de componentes

export default class Inicio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {//declaracion de variables
      Visibleview: 'Iniciar',
      stateV: '',
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


    const btnUpdate1 = async event =>{
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/votar.php?Voto=1`);
      request.send();
      var ready = new XMLHttpRequest();
      ready.open('GET', `http://192.168.1.74/2023B/conteo.php`);
      ready.send();
      checkState();
    }

    const btnUpdate2 = async event =>{
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/votar.php?Voto=1`);
      request.send();
      var ready = new XMLHttpRequest();
      ready.open('GET', `http://192.168.1.74/2023B/conteo.php`);
      ready.send();
      checkState();
    }

    const btnUpdate3 = async event =>{
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/votar.php?Voto=1`);
      request.send();
      var ready = new XMLHttpRequest();
      ready.open('GET', `http://192.168.1.74/2023B/conteo.php`);
      ready.send();
      checkState();
    }

    const stateCentral = () =>{
        var check = new XMLHttpRequest();
        check.open('GET', `http://192.168.1.74/2023B/voto.php/`);
        check.send();
        aux = check.onreadystatechange = (e) => {
          if(check.responseText === "1"){
            this.setState({stateV: check.responseText});
          }else{
            this.setState({stateV: "0"});
          }
        };
    };

    const checkState = async event =>{
      this.showView('Upload');
      this.setState({stateV: "0"})
      while(this.state.stateV != '1'){
        stateCentral();
        console.log('waiting');
        await delay(1000);
        console.log(this.state.stateV);
      }
      var request = new XMLHttpRequest();
      request.open('GET', `http://192.168.1.74/2023B/adminL.php?Admin=0`);
      request.send();
      this.showView('viewOpciones');
    };

    return (//parte visible que se mostrará
    
    <View style={styles.container}>
      {this.state.Visibleview === 'viewOpciones' &&(
         <View style={styles.container}>
          <Text style={{marginTop: 45, fontSize: 30, color: '#3289a8'}}>Acuerdo #2983</Text>
          <View style={styles.container2}>
            <TouchableOpacity style= {styles.btn_favor} onPress={()=> this.showView('Aceptar')}>
            <Image
            style={styles.icono}
            source={require("./Imagenes/aceptar.png")}
          />
            </TouchableOpacity>

            <TouchableOpacity style= {styles.btn_contra} onPress={()=> this.showView('Cancelar')}>
            <Image
            style={styles.icono}
            source={require("./Imagenes/menos.png")}
          />
            </TouchableOpacity>

            <TouchableOpacity style= {styles.btn_anular} onPress={()=> this.showView('Anular')}>
            <Image
            style={styles.icono}
            source={require("./Imagenes/anular.png")}
          />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {this.state.Visibleview === 'Aceptar' &&(
        <View style={styles.container}>
          <Text style={{marginTop: 45, fontSize: 30, color: '#3289a8'}}>Acuerdo #2983</Text>
          <View style={styles.confirmacionFavor}>
            <Text style={{fontSize: 30,color:'#00830E',marginBottom:20}}>¿Agregar voto a favor?</Text>
            <Image
            style={styles.icono}
            source={require("./Imagenes/aceptar.png")}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style= {styles.popup_btn} onPress={()=> this.showView('viewOpciones')}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.popup_btn} onPress={btnUpdate1}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Aceptar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      )}

      {this.state.Visibleview === 'Cancelar' &&(
        <View style={styles.container}>
          <Text style={{marginTop: 45, fontSize: 30, color: '#3289a8'}}>Acuerdo #2983</Text>
          <View style={styles.confirmacionContra}>
            <Text style={{fontSize: 30,color:'#B71600',marginBottom:20}}>¿Agregar voto en contra?</Text>
            <Image
            style={styles.icono}
            source={require("./Imagenes/menos.png")}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style= {styles.popup_btn} onPress={()=> this.showView('viewOpciones')}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.popup_btn} onPress={btnUpdate2}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Aceptar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      )}

      {this.state.Visibleview === 'Anular' &&(
        <View style={styles.container}>
          <Text style={{marginTop: 45, fontSize: 30, color: '#3289a8'}}>Acuerdo #2983</Text>
          <View style={styles.confirmacionAnular}>
            <Text style={{fontSize: 30,color:'#6D6D6D',marginBottom:20}}>¿Agregar voto nulo?</Text>
            <Image
            style={styles.icono}
            source={require("./Imagenes/anular.png")}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style= {styles.popup_btn} onPress={()=> this.showView('viewOpciones')}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.popup_btn} onPress={btnUpdate3}>
                <Text style= {{fontSize: 16, color: '#094683'}}>Aceptar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      )}

      {this.state.Visibleview === 'Upload' &&(
        <View style={styles.upload}>
          <Image
          style={styles.icono2}
          source={require("./Imagenes/votar.png")}
        />
        </View>

      )}

      {this.state.Visibleview === 'Iniciar' &&(
        <View style={styles.upload}>
          <Text style={{marginTop: 85, fontSize: 30, color: '#3289a8'}}>Acuerdo #2984</Text>
          <Image
          style={styles.icono2}
          source={require("./Imagenes/votar.png")}
        />
        <TouchableOpacity style= {styles.btn_siguiente} onPress={checkState}>
          <Text style={{fontSize: 20, color: 'black'}}>Votar</Text>
          </TouchableOpacity>
        </View>

      )}

    </View>
    );
  }
}

//styles
const styles = StyleSheet.create({
    buttons: {
      marginRight:30,
      marginTop: 10,
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
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#82C9FF",
      width: 350,
      height: 400,
      borderRadius: 15,
    },

    confirmacionFavor:{
      marginTop: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#15A140',
      backgroundColor: '#C4F5B2',
      width: 400,
      height: 200,
      borderRadius: 15,
      borderWidth: 3,
    },

    confirmacionContra:{
      marginTop: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#F55D5D',
      backgroundColor: '#F5B7B2',
      width: 400,
      height: 200,
      borderRadius: 15,
      borderWidth: 3,
    },
    confirmacionAnular:{
      marginTop: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#6D6D6D',
      backgroundColor: '#E8E8E8',
      width: 400,
      height: 200,
      borderRadius: 15,
      borderWidth: 3,
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
    btn_favor:{
      width: 300,
      height: 90,
      borderRadius: 8,
      borderColor: '#15A140',
      backgroundColor: '#C4F5B2',
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 3,
    },
    btn_contra:{
      width: 300,
      height: 90,
      borderRadius: 8,
      borderColor: '#F55D5D',
      backgroundColor: '#F5B7B2',
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 3,
    },
    btn_anular:{
      width: 300,
      height: 90,
      borderRadius: 8,
      borderColor: '#6D6D6D',
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 3,
    },
    popup_btn:{
        marginHorizontal:5,
        width: 100,
        height: 40,
        borderRadius: 8,
        borderColor: '#094683',
        backgroundColor: '#D9EBFD',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 40,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
    },
    icono:{
      width:50,
      height:50,
      alignItems: 'center',
  },
    icono2:{
      marginTop: 200,
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