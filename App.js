import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import React from 'react';

import ButtonGradient from './src/button/buttonLogin';



import { LinearGradient } from 'expo-linear-gradient';

function LoginScreen(){
 

  
  return (
    <View style={styles.mainContainer}>
  
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your Account</Text>
      <TextInput   placeholder='luke.Skywalker@gmail.com'  style={styles.textIput}/>

      <TextInput  style={styles.textIput} placeholder='Exp: 1234'/>
      <StatusBar style="auto" />
      <Text style={styles.fotgotPassword}>Forgot your password?</Text>
      <ButtonGradient  />

      <TouchableOpacity style={styles.containerButton} >
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x:1, y: 1}}
                style={styles.button}
               >
                <Text style={styles.textButton}>CREATE ACCOUNT</Text>
            </LinearGradient>
        </TouchableOpacity>
      
      
      
    </View>
  );
}



export default function App() {

  return (
    <LoginScreen/>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 60,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textIput: {
    borderWidth: 1,
    paddingStart: 30,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  fotgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  containerButton: {
    alignItems: 'center',
    width: 500,
    marginTop: 20,
},
textButton: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
button: {
   width: '40%',
   height: 50,
   borderRadius: 25,
   padding: 10,
   alignItems: 'center',
   justifyContent: 'center',
}
  
});
