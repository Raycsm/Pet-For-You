import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import style from './style/style';

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");

  function CheckCampos() {
    if ((email) !== '')
      return navigation.navigate('');

  }

  return (
    <View>
      <Image style={style.logo} source={require('../../assets/logo.png')} />

      <Text style={{
        alignSelf: 'center',
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#434242',
      }}>
        Recuperar Senha
      </Text>

      <TextInput
        style={style.input}
        mode='outlined'
        outlineColor='#ECEBEA'
        activeOutlineColor='#DB652F'
        label="Digite o e-mail cadastrado"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button onPress={() => CheckCampos()}
        style={style.botao}
        mode="contained">
        Recuperar
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{
          marginBottom: 15,
          alignSelf: 'center',
          color: '#837F7F',
        }}>
          Já possui uma conta? 
          <Text style={{
            fontWeight: 'bold',
            color: '#DB652F',
            marginBottom: 20
          }}>
            Faça login
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
