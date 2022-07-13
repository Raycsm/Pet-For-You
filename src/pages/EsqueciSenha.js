import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity,View } from 'react-native';
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EsqueciSenha({navigation}) {

    const [email, setEmail] = useState("");
    
    function CheckCampos () {
        if((email) !== '')
      return navigation.navigate('');
    }
 
    return (
        <SafeAreaView style={styles.bg}>
                <Appbar.Header style = {styles.appbar}>
                    <Appbar.BackAction onPress={() => {navigation.navigate("Login")}} />
                </Appbar.Header>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                
                <Text style={styles.titulo}>
                    Recuperar Senha
                </Text>

                <TextInput
                    style={styles.input}
                    mode='outlined'
                    outlineColor='#ECEBEA'
                    activeOutlineColor='#DB652F'
                    label="Digite o e-mail cadastrado"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />   
                <Button 
                      onPress={() => CheckCampos()}
                      style={styles.botao}
                      mode="contained">
                      Recuperar
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style = {styles.Conta}>
                        Já possui uma conta? <Text style={styles.FacaLogin}>Faça login</Text>
                    </Text>
                </TouchableOpacity>
		    </SafeAreaView>
    );
  };

const styles = StyleSheet.create({

  bg:{
    backgroundColor:'white',
  },
  logo: {
    width: 200,
    height: 150,
    display: 'flex',
    alignSelf: 'center',
    marginTop:20,
    marginBottom:40,
  },
  appbar: {
		height:10,
		backgroundColor: 'white',
		marginBottom:25,
	},
  titulo:{
    alignSelf: 'center',
    marginBottom:30,
    fontSize:25,
    fontWeight:'bold',
    color:'#434242',
  },
 
  input: {
    marginBottom: 15,
    width:310,
    borderRadius:'10',
    alignSelf: 'center',
    backgroundColor:'#E7E6E5',
    fontSize:14, 
  },

  botao:{
    width:310, 
    alignSelf: 'center',
    marginBottom: 30,
    width: '80%',
    padding: 8,
    textAlign:'center',
    borderRadius: 40,
    marginTop:30,
    backgroundColor: '#DB652F',
  },

  FacaLogin:{
    fontWeight:'bold',
    color: '#DB652F',
  },
  Conta:{
    marginBottom:15,
    alignSelf:'center',
    color:'#837F7F',
    marginBottom:160,
  },
});
