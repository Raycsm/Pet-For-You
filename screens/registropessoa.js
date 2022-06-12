import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Card, Title, Button, ToggleButton, TextInput, Text, List } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */

const RegistroPessoa = () => {

	const imageUpload = () => {
		ImagePicker.launchImageLibrary({}, response => {
			console.log("Response = ", response);
		})
	};

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
			primary: 'orange',
			accent: 'orange',
		}
	};

	const container = StyleSheet.create({
		content: {
			display: "flex",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row",
			backgroundColor: 'black',
		},
		elements: {
			margin: 10,

		},
		elementscenter: {
			margin: 5,
			marginBottom: 10,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			fontSize: 18,
			marginTop: 10,
			marginBottom: 10,
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center"
		}
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Card
					theme={theme}
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Card.Title title="Registro do usuário" titleStyle={{
						fontSize: 20,
						color: 'orange',
						textAlign: "center"
					}} />
					<Card.Content>
						<List.Accordion
							title={tipopessoa === "" ? "Tipo de pessoa" : tipopessoa}
							left={props => <List.Icon {...props} icon="account-multiple" />}
							expanded={expanded}
							onPress={handlePress}
							theme={theme}
						>
							<List.Item
								title="Pessoa Física"
								left={props => <List.Icon {...props} icon="account" />}
								onPress={() => seTipoppessoa("Pessoa física")}
							/>
							<List.Item
								title="Pessoa Jurídica"
								left={props => <List.Icon {...props} icon="account-multiple" />}
								onPress={() => seTipoppessoa("Pessoa jurídica")}
							/>
						</List.Accordion>
					{tipopessoa === "Pessoa física" && (
						<>
							<TextInput
								label="CPF"
								value={cpf}
								onChangeText={setCpf}
								theme={theme}
								style={container.elements}
							/>
						</>)
					}
					{tipopessoa === "Pessoa jurídica" && (
						<>
							<TextInput
								label="CNPJ"
								value={cnpj}
								onChangeText={setCnpj}
								theme={theme}
								style={container.elements}
							/>
						</>)}
					<TextInput label="Nome*"
						theme={theme}
						style={container.elements}
						value={nome}
						onChangeText={nome => setNome(nome)} />
					<TextInput label="Endereço*"
						value={endereco}
						style={container.elements}
						theme={theme}
						onChangeText={endereco => setEndereco(endereco)} />
					<TextInput label="Telefone*" theme={theme}
						style={container.elements}
						value={telefone}
						onChangeText={telefone => setTelefone(telefone)} />
					<TextInput label="Email*" theme={theme}
						style={container.elements}
						value={email}
						onChangeText={email => setEmail(email)} />
					{/* <TextInput label="Descrição*" theme={theme} 
						style={container.elements}
						multiline={true}
					numberOfLines={5}
						value={descricao}
						onChangeText={descricao => setDescricao(descricao)} /> */}
					<TextInput label="Senha*" theme={theme}
						style={container.elements}
						secureTextEntry={true}
						value={senha}
						onChangeText={senha => setSenha(senha)} />
						
					<TextInput label="Confirmar senha*" theme={theme}
						style={container.elements}
						secureTextEntry={true}
						value={confirmarsenha}
						onChangeText={confirmarsenha => setConfirmarsenha(confirmarsenha)} />
						</Card.Content>
						<Card.Actions>
						<View style={{
							display: "flex",
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
						}}>
							<Button
								mode="contained" color="orange" onPress={() => { }}>
								Cadastrar
							</Button>
							</View>
						</Card.Actions>
				</Card>
			</ScrollView>
		</SafeAreaView>
	);
}


export default RegistroPessoa;
