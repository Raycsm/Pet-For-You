import { StyleSheet, SafeAreaView, View, StatusBar, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import React, { Component, useState } from 'react'
import { TextInput,Appbar, Button, Avatar, Modal, Portal, Provider} from 'react-native-paper';
import AvatarImg from "../../assets/avatar.png"
import CheckImg from "../../assets/Check.png"
import QuestionImg from "../../assets/Question.png"
import { TelaInicialNavigation } from '../Navegacoes/StackNavigation'
import style from "./style/style";

const StatusBarHeight = StatusBar.currentHeight; //pega altura da statusbar e coloca como margintop

export default function MeuPerfil({ navigation }) {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [visibleModalSalvar, setVisibleModalSalvar] = React.useState(false);
  const [visibleModalExcluir, setVisibleModalExcluir] = React.useState(false);
  const [visibleModalConfirmar, setVisibleModalConfirmar] = React.useState(false);

  const showModalSalvar = () => setVisibleModalSalvar(true);
  const hideModalSalvar = () => setVisibleModalSalvar(false);

  const showModalExcluir = () => setVisibleModalExcluir(true);
  const hideModalExcluir = () => setVisibleModalExcluir(false);

  const showModalConfirmar = () => setVisibleModalConfirmar(true);
  const hideModalConfirmar = () => setVisibleModalConfirmar(false);

  const containerStyle = {backgroundColor: 'white', width: 290, height: 230, alignSelf: 'center'};
  const containerExcluirStyle = {backgroundColor: 'white', width: 380, height: 340, alignSelf: 'center'};

  const [ShowPassword, setShowPassword] = useState(true)

  function CheckCampos () {
      if((email, password, nome, cpf, telefone, endereco) !== '')
    return navigation.navigate('TelaInicial');
      
}

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={style.appbar}>
                <Appbar.BackAction onPress={() => {navigation.navigate(TelaInicialNavigation)}} />
            </Appbar.Header>
           
      <ScrollView contentContainerStyle={styles.bg}>

      <Provider>
      <Text style={styles.title}> Meu Perfil </Text>

      <Avatar.Image style={style.avatar} size={134} source={AvatarImg} />
      <TouchableOpacity style={styles.botaoFoto} onPress= {() => EscolherFoto() }>
					<Text style= {styles.textoBotao}>Escolher foto</Text>
			</TouchableOpacity>

      <TextInput
            style={style.input}
            mode='outlined'
            disabled
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="João Carlos Almeida"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

      <TextInput
            style={style.input}
            mode='outlined'
            disabled
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="048.231.231-28"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />
        
          <TextInput
            style={style.input}
            mode='outlined'
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="joao_carlos123@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={style.input}
            mode='outlined'
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="Nova senha"
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

          <TextInput
            style={style.input}
            mode='outlined'
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="(67) 99241-2321"
            value={telefone}
            onChangeText={(telefone) => setTelefone(text)}
          />

          <TextInput
            style={style.input}
            mode='outlined'
            outlineColor='#ECEBEA'
            activeOutlineColor='#DB652F'
            label="Rua dos Pombais, 341"
            value={endereco}
            onChangeText={(endereco) => setEndereco(text)}
          />

          <View style={styles.containerBotao}>

            <Button onPress={() => showModalSalvar()}
                style={styles.botaoSalvar}
                mode="contained">
            Salvar
            </Button>

            <Button onPress={() => showModalExcluir()}
                style={styles.botaoExcluir}
                mode="contained">
            Excluir
            </Button>
          </View>


        <Portal>
          <Modal visible={visibleModalSalvar} onDismiss={hideModalSalvar} contentContainerStyle={containerStyle}>
            <Image style={styles.checkImg} source={CheckImg}/>
            <Text style={{textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom: 10, fontWeight: 'bold', color: '#434242'}}> Sucesso!</Text>
            <Text style={{textAlign: 'center', fontSize: 17}}> Suas alterações foram realizadas!</Text>
            <Button onPress={() => hideModalSalvar()} style={styles.botaooK}> <Text style={{color: 'white'}}> OK </Text> </Button>
          </Modal>
        </Portal>
        
        <Portal>
          <Modal visible={visibleModalExcluir} onDismiss={hideModalExcluir} contentContainerStyle={containerExcluirStyle}>
            <Image style={styles.QuestionImg} source={QuestionImg}/>
            <Text style={{textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom: 10, fontWeight: 'bold', color: '#434242'}}> Deseja realmente excluir sua conta?</Text>
            <Text style={{textAlign: 'center', fontSize: 17}}> Esta ação não poderá ser desfeita.</Text>
            <Button onPress={() => {
              showModalConfirmar()
              hideModalExcluir()
            }} style={styles.botaooK}> <Text style={{color: 'white'}}> Confirmar </Text> </Button>
            <Button onPress={() => hideModalExcluir()} style={styles.botaoCancelarModal}> <Text style={{color: 'white'}}> Cancelar </Text> </Button>
          </Modal>
        </Portal>

        <Portal>
          <Modal visible={visibleModalConfirmar} onDismiss={hideModalConfirmar} contentContainerStyle={containerExcluirStyle}>
            <Image style={styles.checkImg} source={CheckImg}/>
            <Text style={{textAlign: 'center', fontSize: 24, marginTop: 10, marginBottom: 10, fontWeight: 'bold', color: '#434242'}}> Sucesso!</Text>
            <Text style={{textAlign: 'center', fontSize: 17}}> Sua conta foi excluída conforme solicitado.</Text>
            <Button onPress={() => hideModalConfirmar()} style={styles.botaooK}> <Text style={{color: 'white'}}> OK </Text> </Button>
          </Modal>
        </Portal>

      </Provider>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

container: {
  marginTop: StatusBarHeight,
  flex: 1
},
bg:{
  backgroundColor:'white',
  flexGrow: 1,
  alignItems: 'center',
},
title: {
  fontWeight: 'bold',
  fontSize: 24,
  lineHeight: 23,
  color: '#4A4A4A',
  marginTop: 34,
  marginBottom: 34,
  alignSelf: 'center',
},
checkImg: {
  width: 65,
  height: 65,
  display: 'flex',
  alignSelf: 'center',
  marginTop: 1,
},
QuestionImg: {
  width: 65,
  height: 65,
  display: 'flex',
  alignSelf: 'center',
  marginTop:1,
},
containerBotao: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
},
botaoSalvar: {
  width:250, 
  alignSelf: 'center',
  marginBottom: 30,
  padding: 8,
  textAlign:'center',
  borderRadius: 40,
  marginTop:10,
  backgroundColor: '#DB652F',
},

botaoCancelar: {
  width:154, 
  alignSelf: 'center',
  marginBottom: 30,
  padding: 8,
  textAlign:'center',
  borderRadius: 40,
  marginTop:20,
  backgroundColor: '#96918F',
},
botaoFoto:{
  width: 120,
  height: 35,
  borderRadius:50,
  backgroundColor:'#DB652F',
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
  marginBottom:30,
},
textoBotao:{
  color:"#fff",
},

botaoExcluir: {
  width:250, 
  alignSelf: 'center',
  marginBottom: 30,
  padding: 8,
  textAlign:'center',
  borderRadius: 40,
  marginTop:20,
  marginBottom:80,
  backgroundColor: '#C00202',
},

botaooK: {  
  color: 'white',
  width:240, 
  alignSelf: 'center',
  padding: 8,
  textAlign:'center',
  borderRadius: 40,
  marginTop:20,
  backgroundColor: '#DB652F',
},

botaoCancelarModal: {  
  color: 'white',
  width:240, 
  alignSelf: 'center',
  padding: 8,
  textAlign:'center',
  borderRadius: 40,
  marginTop:20,
  backgroundColor: '#A19B9B',
},

CriarConta:{
  fontWeight:'bold',
  color: '#DB652F',
  marginBottom:20,
},

Semlogin:{
  fontWeight:'bold',
  color: '#DB652F',
  alignSelf:'center',
  marginBottom:30,
  textDecorationLine:'underline',
},

});