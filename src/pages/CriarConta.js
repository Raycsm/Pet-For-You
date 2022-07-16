import * as React from "react";
import { ScrollView } from "react-native";
import { Button, ToggleButton, TextInput, List } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import axios from "axios";
import style from "./style/style";
import theme from "./style/theme";

export default function CriarConta({ navigation }) {

	const [tipopessoa, seTipoppessoa] = React.useState("");
	const [nome, setNome] = React.useState("");
	const [cpf, setCpf] = React.useState("");
	const [cnpj, setCnpj] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [senha, setSenha] = React.useState("");
	const [confirmarsenha, setConfirmarsenha] = React.useState("");
	const [telefone, setTelefone] = React.useState("")
	const [endereco, setEndereco] = React.useState("");

	const [expanded, setExpanded] = React.useState(true);
	const handlePress = () => setExpanded(!expanded);

	return (
		<View style={style.conteudo}>
			<Image style={style.logo} source={require('../../assets/logo.png')} />
			<ScrollView>
				<List.Accordion theme={theme.colors} style={style.tipopessoa}
					title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
					left={props => <List.Icon {...props} icon="account-multiple" />}
					expanded={expanded}
					onPress={handlePress}>
					<List.Item style={style.itens}
						title="Pessoa Física"
						left={props => <List.Icon {...props} icon="account" />}
						onPress={() => seTipoppessoa("f")}
					/>
					<List.Item style={style.itens}
						title="Pessoa Jurídica"
						left={props => <List.Icon {...props} icon="account-multiple" />}
						onPress={() => seTipoppessoa("j")}
					/>
				</List.Accordion>
				{tipopessoa === "f" && (

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
				{tipopessoa === "j" && (

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
				<TextInput label="Nome*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					value={nome}
					onChangeText={nome => setNome(nome)} />

				<TextInput label="Endereço*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					value={endereco}
					style={style.input}
					onChangeText={endereco => setEndereco(endereco)} />

				<TextInput label="Telefone*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					value={telefone}
					onChangeText={telefone => setTelefone(telefone)} />

				<TextInput label="Email*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					value={email}
					onChangeText={email => setEmail(email)} />

				<TextInput label="Senha*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					secureTextEntry={true}
					value={senha}
					onChangeText={senha => setSenha(senha)} />

				<TextInput label="Confirmar senha*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={style.input}
					secureTextEntry={true}
					value={confirmarsenha}
					onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />


				<Button style={style.botao}
					mode="contained" color="#DB652F" onPress={
						() => {
							if (senha === confirmarsenha) {
								if (tipopessoa === "f") {
								axios.post('http://localhost:3000/cliente', {
									email: email,
									senha: senha,
									endereco: endereco,
									telefone: telefone,
									fisicaoujuridica: tipopessoa,
									nome: nome,
									cpf: cpf})
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
									axios.post('http://localhost:3000/cliente', {
										email: email,
										senha: senha,
										endereco: endereco,
										telefone: telefone,
										fisicaoujuridica: tipopessoa,
										nome: nome,
										cnpj: cnpj})
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
			</ScrollView>

		</View>
	);
}