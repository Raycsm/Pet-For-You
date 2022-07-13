import React, { useState } from 'react';
import { Text, Button, TextInput, List, Appbar, Avatar} from "react-native-paper";
import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CriarConta({ navigation }) {
	const [tipopessoa, seTipoppessoa] = React.useState("");
	const [nome, setNome] = React.useState("");
	const [cpf, setCpf] = React.useState("");
	const [cnpj, setCnpj] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [senha, setsenha] = React.useState("");
	const [confirmarsenha, setConfirmarsenha] = React.useState("");
	const [telefone, setTelefone] = React.useState("")
	const [endereco, setEndereco] = useState("");

	const [expanded, setExpanded] = React.useState(true);
	const handlePress = () => setExpanded(!expanded);

	const [ShowPassword, setShowPassword] = React.useState(true)

	const theme = {
		colors: {
			primary: "#db652f",
			secondary: "#db652f",
			terticiary: "#db652f",
		}
	}
	return (
		<SafeAreaView style={container.conteudo}>
			<Appbar.Header style={container.appbar}>
                <Appbar.BackAction onPress={() => {navigation.navigate("Login")}} />
            </Appbar.Header>
			<ScrollView>

				<Image style={container.logo} source={require('../../assets/logo.png')}/>
				
				<Avatar.Image style={container.avatar} size = {120} source={require('../../assets/avatar.png')} />

				<TouchableOpacity style={container.botaoFoto} onPress= {() => EscolherFoto() }>
					<Text style= {container.textoBotao}>Escolher foto</Text>
				</TouchableOpacity> 
					
				<List.Accordion theme = {theme}
					style={container.tipopessoa}
					title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
					left={props => <List.Icon {...props} icon="account-multiple" />}
					onPress={handlePress}>
					<List.Item style={container.itens}
						title="Pessoa Física"
						left={props => <List.Icon {...props} icon="account"/>}
						onPress={() => seTipoppessoa("Pessoa Física")}
					/>
					<List.Item style={container.itens}
						title="Pessoa Jurídica"
						left={props => <List.Icon {...props} icon="account-multiple" />}
						outlineColor='#ECEBEA'
						activeOutlineColor='#DB652F'
						onPress={() => seTipoppessoa("Pessoa Jurídica")}
					/>
				</List.Accordion>
				{tipopessoa === "Pessoa Física" && (

					<TextInput
						mode='outlined'
						outlineColor='#ECEBEA'
						activeOutlineColor='#DB652F'
						label="CPF"
						value={cpf}
						onChangeText={setCpf}
						style={container.input}
					/>
				)
				}
				{tipopessoa === "Pessoa Jurídica" && (

					<TextInput
						mode='outlined'
						outlineColor='#ECEBEA'
						activeOutlineColor='#DB652F'
						label="CNPJ"
						value={cnpj}
						onChangeText={setCnpj}
						style={container.input}
					/>
				)}
				<TextInput label="Nome"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={nome}
					onChangeText={nome => setNome(nome)} />

				<TextInput label="Endereço"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					value={endereco}
					style={container.input}
					onChangeText={endereco => setEndereco(endereco)} />

				<TextInput label="Telefone"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={telefone}
					onChangeText={telefone => setTelefone(telefone)} />

				<TextInput label="Email"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={email}
					onChangeText={email => setEmail(email)} />

				<TextInput label="Senha"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					secureTextEntry={ShowPassword}
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
					value={senha}
					onChangeText={text => setsenha(text)} />
						
				<TextInput label="Confirmar senha"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					secureTextEntry={ShowPassword}
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
					value={confirmarsenha}
					onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />
            	
				<Button style={container.botao}
					mode="contained" onPress={
						() => {
							if (senha === confirmarsenha) {
								if (tipopessoa === "f") {
									axios.post('http://localhost:3000/pessoa', {
										email: email,
										senha:senha,
										endereco: endereco,
										telefone: telefone,
										fisicaoujuridica: tipopessoa,
										nome: nome,
										cpf: cpf
									})
										.then(function (response) {
											console.log(response);
											alert('Cadastro realizado com sucesso!');
											navigation.navigate('Login');
										}
										)
										.catch(function (error) {
											console.log(error);
											alert('Erro ao realizar o cadastro!');
										}
										);
								} else {
									axios.post('http://localhost:3000/pessoa', {
										email: email,
										senha: senha,
										endereco: endereco,
										telefone: telefone,
										fisicaoujuridica: tipopessoa,
										nome: nome,
										cnpj: cnpj
									})
										.then(function (response) {
											console.log(response);
											alert('Cadastro realizado com sucesso!');
											navigation.navigate('Login');
										}
										)
										.catch(function (error) {
											console.log(error);
											alert('Erro ao realizar o cadastro!');
										}
										);
								}
							} else {
								alert('Senhas não conferem!');
							}
						}
					}>
					Cadastrar
				</Button>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style = {container.Conta}>
						Já possui uma conta? <Text style={container.FacaLogin}>Faça login</Text>
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const container = StyleSheet.create({
	conteudo: {
		backgroundColor: 'white',
	},
	appbar: {
		height:10,
		backgroundColor: 'white',
		marginBottom:25,
	},
	avatar:{
		alignSelf:'center',
		marginBottom:10,	
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
	input: {
		marginBottom: 10,
		width: 310,
		alignSelf: 'center',
		outlineColor: 'black',
		fontsize: 14,
		backgroundColor:'#E7E6E5',
	},
	logo: {
		width: 120,
		height: 90,
		display: 'flex',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	tipopessoa: {
		marginBottom: 10,
		width: 310,
		alignSelf: 'center',
		fontsize: 14,
		backgroundColor: '#E7E6E5',
	},
	FacaLogin:{
		fontWeight:'bold',
		color: '#DB652F',
		marginBottom:20,
	},
	  Conta:{
		marginBottom:15,
		alignSelf:'center',
		color:'#837F7F',
		marginBottom:100,
	},
	itens: {
		marginBottom: 10,
		width: 310,
		alignSelf: 'center',
		fontsize: 14,
		backgroundColor: '#C3C3C3',
	},

	botao: {
		width: 310,
		alignSelf: 'center',
		marginBottom: 20,
		width: '80%',
		padding: 8,
		textAlign: 'center',
		borderRadius: 40,
		backgroundColor: '#DB652F',
		marginTop:20,
	}
});
