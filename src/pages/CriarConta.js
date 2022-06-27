import * as React from "react";
import { ScrollView } from "react-native";
import { Button, ToggleButton, TextInput, List } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";

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

	const theme = {
		colors: {
			primary: "#db652f",
			secondary: "#db652f",
			terticiary: "#db652f",
		}
	}

	return (
		<View style={container.conteudo}>
			<Image style={container.logo} source={require('../../assets/logo.png')} />
			<ScrollView>
				<List.Accordion theme={theme} style={container.tipopessoa}
					title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
					left={props => <List.Icon {...props} icon="account-multiple" />}
					expanded={expanded}
					onPress={handlePress}>
					<List.Item style={container.itens}
						title="Pessoa Física"
						left={props => <List.Icon {...props} icon="account" />}
						onPress={() => seTipoppessoa("Pessoa física")}
					/>
					<List.Item style={container.itens}
						title="Pessoa Jurídica"
						left={props => <List.Icon {...props} icon="account-multiple" />}
						onPress={() => seTipoppessoa("Pessoa jurídica")}
					/>
				</List.Accordion>
				{tipopessoa === "Pessoa física" && (

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
				{tipopessoa === "Pessoa jurídica" && (

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
				<TextInput label="Nome*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={nome}
					onChangeText={nome => setNome(nome)} />

				<TextInput label="Endereço*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					value={endereco}
					style={container.input}
					onChangeText={endereco => setEndereco(endereco)} />

				<TextInput label="Telefone*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={telefone}
					onChangeText={telefone => setTelefone(telefone)} />

				<TextInput label="Email*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					value={email}
					onChangeText={email => setEmail(email)} />

				<TextInput label="Senha*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					secureTextEntry={true}
					value={senha}
					onChangeText={senha => setSenha(senha)} />

				<TextInput label="Confirmar senha*"
					mode='outlined'
					outlineColor='#ECEBEA'
					activeOutlineColor='#DB652F'
					style={container.input}
					secureTextEntry={true}
					value={confirmarsenha}
					onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />


				<Button style={container.botao}
					mode="contained" color="#DB652F" onPress={() => { }}>
					Cadastrar
				</Button>
			</ScrollView>

		</View>
	);
}

const container = StyleSheet.create({
	conteudo: {
		backgroundColor: 'white',
	},
	content: {
		display: "flex",
		flex: 1,
	},
	input: {
		marginBottom: 10,
		width: 310,
		borderRadius: '10',
		alignSelf: 'center',
		backgroundColor: '#C2C0BE',
		outlineColor: 'black',
		fontsize: 14,
	},
	logo: {
		width: 150,
		height: 100,
		display: 'flex',
		alignSelf: 'center',
		marginTop: 60,
		marginBottom: 40,
	},
	tipopessoa: {
		marginBottom: 10,
		width: 310,
		alignSelf: 'center',
		fontsize: 14,
		backgroundColor: '#E7E6E5',
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
		marginBottom: 30,
		width: '80%',
		padding: 8,
		textAlign: 'center',
		borderRadius: 40,
		backgroundColor: '#DB652F',
	}
});
