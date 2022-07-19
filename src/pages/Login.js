import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import style from './style/style';

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ShowPassword, setShowPassword] = useState(true)

  function CheckCampos() {
    if ((email, password) !== '')
      return navigation.navigate('TelaInicial');

  }

  return (
    <View>
      <Image style={style.logo} source={require('../../assets/logo.png')} />

      <TextInput
        style={style.input}
        mode='outlined'
        outlineColor='#ECEBEA'
        activeOutlineColor='#DB652F'
        label="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={style.input}
        mode='outlined'
        outlineColor='#ECEBEA'
        activeOutlineColor='#DB652F'
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={ShowPassword}
        right={
          ShowPassword ?
            <TextInput.Icon
              name="eye"
              size={20}
              color="grey"
              onPress={() => setShowPassword(!ShowPassword)}
            />
            :
            <TextInput.Icon
              name="eye-off"
              size={20}
              color="grey"
              onPress={() => setShowPassword(!ShowPassword)}
            />
        }

      />
      <TouchableOpacity onPress={() => navigation.navigate("EsqueciSenha")}>
        <Text style={{
          color: '#DB652F',
          marginLeft: 230,
        }}>
          Esqueci a senha
        </Text>
      </TouchableOpacity>

      <Button onPress={() => CheckCampos()}
        style={style.botao}
        mode="contained">
        Entrar
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("CriarConta")}>
        <Text style={{
          marginBottom: 15,
          alignSelf: 'center',
          color: '#837F7F',
        }}>
          Não tem uma conta?
          <Text style={{
            fontWeight: 'bold',
            color: '#DB652F',
            marginBottom: 20,
          }}>
            Crie agora
          </Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TelaInicial")}>
        <Text style={{
          fontWeight: 'bold',
          color: '#DB652F',
          alignSelf: 'center',
          marginBottom: 30,
          textDecorationLine: 'underline',
        }}>
          Entrar sem login
        </Text>
      </TouchableOpacity>

      <Image style={style.pets} source={require('../../assets/pets.png')} />
    </View>
  );
};
