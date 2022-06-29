import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';


export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [ShowPassword, setShowPassword] = useState(true)

    function CheckCampos () {
        if((email, password) !== '')
      return navigation.navigate('TelaInicial');
        
  }
 
    return (
        <View style={styles.bg}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
          
            <TextInput
              style={styles.input}
              mode='outlined'
              outlineColor='#ECEBEA'
              activeOutlineColor='#DB652F'
              label="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={styles.input}
              mode='outlined'
              outlineColor='#ECEBEA'
              activeOutlineColor='#DB652F'
              label="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry ={ShowPassword}
              right={
                ShowPassword ?
                <TextInput.Icon
                name="eye"
                size={20}
                color="grey"
                onPress= {() => setShowPassword(!ShowPassword)}
                />
                :
                <TextInput.Icon
                name ="eye-off"
                size={20}
                color="grey"
                onPress= {() => setShowPassword(!ShowPassword)}
                />
              }
            
            /> 
            <TouchableOpacity onPress={() => navigation.navigate("EsqueciSenha")}>
              <Text style = {styles.EsqueciSenha}>
                Esqueci a senha
              </Text>
            </TouchableOpacity>      

            <Button onPress={() => CheckCampos()}
                style={styles.botao}
                mode="contained">
            Entrar
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("CriarConta")}>
              <Text style = {styles.Conta}>
                  Não tem uma conta? <Text style={styles.CriarConta}>Crie agora</Text>
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("CheckCampos")}>
              <Text style = {styles.Semlogin}>
                  Entrar sem login
              </Text>
            </TouchableOpacity>

            <Image style={styles.pets} source={require('../../assets/pets.png')} />
        </View>
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
    marginTop:60,
    marginBottom:40,
  },
  pets: {
    display: 'flex',
    alignSelf: 'center',
    width: 310,
    height: 165,
    
  },
  input: {
    marginBottom: 15,
    width:310,
    borderRadius:'10',
    alignSelf: 'center',
    backgroundColor:'#E7E6E5',
    fontsize:14, 
  },

  botao:{
    width:310, 
    alignSelf: 'center',
    marginBottom: 30,
    padding: 8,
    textAlign:'center',
    borderRadius: 40,
    marginTop:20,
    backgroundColor: '#DB652F',
  },

  CriarConta:{
    fontWeight:'bold',
    color: '#DB652F',
    marginBottom:20,
  },

  Conta:{
    marginBottom:15,
    alignSelf:'center',
    color:'#837F7F',
  },
  
  Semlogin:{
    fontWeight:'bold',
    color: '#DB652F',
    alignSelf:'center',
    marginBottom:30,
    textDecorationLine:'underline',
  },
  EsqueciSenha:{
    color: '#DB652F',
    marginLeft:230,
    
  }

});
