import React, { useState } from 'react';
import { Text, Button, TextInput, List, Appbar, Avatar} from "react-native-paper";
import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "./style/style";
import theme from "./style/theme";

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

	return (
		<SafeAreaView style={style.conteudo}>
			<Appbar.Header style={style.appbar}>
                <Appbar.BackAction onPress={() => {navigation.navigate("Login")}} />
            </Appbar.Header>
			<ScrollView>

				<Image style={style.logo} source={require('../../assets/logo.png')}/>
				
				<Avatar.Image style={style.avatar} size = {120} source={require('../../assets/avatar.png')} />

				<TouchableOpacity style={container.botaoFoto} onPress= {() => EscolherFoto() }>
					<Text style= {container.textoBotao}>Escolher foto</Text>
				</TouchableOpacity> 
					
				<List.Accordion theme = {theme.colors}
					style={style.tipopessoa}
					title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
					left={props => <List.Icon {...props} icon="account-multiple" />}
					onPress={handlePress}>
					<List.Item style={style.itens}
						title="Pessoa Física"
						left={props => <List.Icon {...props} icon="account"/>}
						onPress={() => seTipoppessoa("Pessoa Física")}
					/>
					<List.Item style={style.itens}
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
						style={style.input}
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
						style={style.input}
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
					style={style.input}
					onChangeText={endereco => setEndereco(endereco)} />

				<TextInput label="Telefone"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					value={telefone}
					onChangeText={telefone => setTelefone(telefone)} />

				<TextInput label="Email"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					value={email}
					onChangeText={email => setEmail(email)} />

				<TextInput label="Senha"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
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
					style={style.input}
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
            	
				<Button style={style.botao}
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
					<Text style = {style.conta}>
						Já possui uma conta? <Text style={container.FacaLogin}>Faça login</Text>
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const container = StyleSheet.create({
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
	logo: {
		width: 120,
		height: 90,
		display: 'flex',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	FacaLogin:{
		fontWeight:'bold',
		color: '#DB652F',
		marginBottom:20,
	},
});