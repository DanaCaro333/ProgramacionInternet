import React, { Component } from 'react';
  import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
//Importacion de componentes


export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {//declaracion de variables
      Visibleview: null,
      nombre: '',
      correo: '',
      password: '',
    };
  }

  showView = (nombreView)=>{
    this.setState({Visibleview: nombreView});
  }


  render() {
    //Programacion de objetos
    const btnAceptar = ()=>{
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

    
    return (//parte visible que se mostrará
    <View style={styles.container}>



      <Text style={{marginTop: 25, fontSize: 30, color: '#3289a8'}}>SIGN UP</Text>
       <View style={styles.container2}>
        <TouchableOpacity style= {styles.touchable2} onPress={()=> this.showView('viewEmail')}>
          <Text style= {{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>WITH EMAIL</Text>
        </TouchableOpacity>
         


        <TouchableOpacity style= {styles.touchable2} onPress={()=> this.showView('viewFacebook')}>
          <Text style= {{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>WITH FACEBOOK</Text>
        </TouchableOpacity>
       </View>

      {this.state.Visibleview === 'viewEmail' &&(
        <View style={styles.containerMail}>
          <Text style={{fontSize: 40,color:'white',}}>EMAIL</Text>
          <TextInput style={styles.touchable}
            placeholder='Nombre'
            onChangeText={(nombre) => this.setState({nombre})}
          />
          <TextInput style={styles.touchable}
            placeholder='correo'
            onChangeText={(correo) => this.setState({correo})}
          />
          <TextInput style={styles.touchable}
            placeholder='contraseña'
            onChangeText={(password) => this.setState({password})}
          />

        <TouchableOpacity style= {styles.aceptar} onPress={btnAceptar} >
            <Text style= {{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>ACEPTAR</Text>
        </TouchableOpacity>


        </View>

      )}

      {this.state.Visibleview === 'viewFacebook' &&(
        <View style={styles.containerFacebook}>
          <Text style={{fontSize: 40,color:'white',}}>FACEBOOK</Text>
          <TextInput style={styles.touchable}
            placeholder='Nombre'
            onChangeText={(nombre) => this.setState({nombre})}
          />
          <TextInput style={styles.touchable}
            placeholder='correo'
            onChangeText={(correo) => this.setState({correo})}
          />
          <TextInput style={styles.touchable}
            placeholder='contraseña'
            onChangeText={(password) => this.setState({password})}
          />
        
        <TouchableOpacity style= {styles.aceptar} onPress={btnAceptar}>
            <Text style= {{marginLeft: 10, marginTop: 11, fontSize: 16, color: 'black'}}>ACEPTAR</Text>
        </TouchableOpacity>

        </View>

      )}

    </View>
    );
  }
}

//styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: "white",
    },
    container2:{
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#3289a8",
      width: 400,
      height: 150,
      borderRadius: 15,
    },

    containerMail:{
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#718EA4',
      width: 400,
      height: 400,
      borderWidth: 2,
      borderColor: '#496D89',
    },
    containerFacebook:{
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#123652',
      width: 400,
      height: 400,
      borderWidth: 2,
      borderColor: '#496D89',
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
    touchable2:{
      width: 300,
      height: 40,
      borderRadius: 8,
      borderColor: 'black',
      backgroundColor: 'white',
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center',
      marginBottom: 15,
      borderWidth: 1,
    },
    aceptar:{
        width: 300,
        height: 40,
        borderRadius: 8,
        borderColor: 'black',
        backgroundColor: '#e6f2ff',
        justifyContent: 'center',
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
    }
});