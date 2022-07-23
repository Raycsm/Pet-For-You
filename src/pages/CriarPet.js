import * as React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Button, ToggleButton, TextInput, Text, List, Avatar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
/* import { Navigationstyle } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */
import axios from "axios";
import style from "./style/style";
import theme from "./style/theme";

function CriarPet({ navigation }) {

	const [nome, setNome] = React.useState("");
	const [localizacao, setLocalizacao] = React.useState("");
	const [sexo, setSexo] = React.useState("");
	const [raca, setRaca] = React.useState("Raça*");
	const [anos, setAnos] = React.useState("");
	const [meses, setMeses] = React.useState("");
	const [peso, setPeso] = React.useState("Peso estimado*");
	const [porte, setPorte] = React.useState("Porte*");
	const [castrado, setCastrado] = React.useState("false")
	const [vacinado, setVacinado] = React.useState("false")
	const [tipo, setTipo] = React.useState("Tipo de animal*")
	const [descricao, setDescricao] = React.useState("")
	const [foto, setFoto] = React.useState("")
	const [email, setEmail] = React.useState("")
	const [telefone, setTelefone] = React.useState("")
	const [visible, setVisible] = React.useState("")

	const [expanded, setExpanded] = React.useState(true);
	// eslint-disable-next-line no-unused-vars
	const handlePress = () => setExpanded(!expanded);

	const pegarImagem = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
		});
		if (!result.cancelled) {
			setFoto(result.uri);
			setVisible("none")
		}
	};

	const scrollView = StyleSheet.create({
		style: {
			flex: 1,
		},
	});

	return (
		<SafeAreaView style={scrollView.style}>
			<ScrollView>
				<Text style={style.text}>Foto do pet</Text>
				<TouchableOpacity onPress={pegarImagem}>
					<Avatar.Icon size={120} icon="camera-outline" theme={theme.colors}
						style={style.avatar} />
				</TouchableOpacity>
				{foto ? <View style={style.elementscenter}>
					<Avatar.Image size={120} source={{ uri: foto }} /> </View> : null}
				<TextInput label="Nome*"
					theme={theme.colors}
					style={style.elements}
					value={nome}
					onChangeText={nome => setNome(nome)} />
				<TextInput label="Localização*"
					value={localizacao}
					style={style.elements}
					theme={theme.colors}
					onChangeText={localizacao => setLocalizacao(localizacao)} />
				<Text style={style.text}>Sexo*</Text>
				<ToggleButton.Row
					style={style.elementscenter}
					onValueChange={value => setSexo(value)}
					value={sexo}>
					<ToggleButton
						icon="gender-male"
						value="Macho"
					/>
					<ToggleButton
						icon="gender-female"
						value="Fêmea"
					/>
				</ToggleButton.Row>
				<List.Accordion
					title={tipo}
					style={style.elements}
					theme={theme.colors}
					left={props => <List.Icon {...props} icon="paw" />}>
					<List.Item title="Cachorro"
						onPress={() => setTipo("Cachorro")} />
					<List.Item title="Gato"
						onPress={() => setTipo("Gato")} />
					<List.Item title="Coelho"
						onPress={() => setTipo("Coelho")} />
				</List.Accordion>
				{tipo === "Cachorro" && (
					<>
						<List.Accordion
							title={raca}
							theme={theme.colors}
							style={style.elements}
							left={props => <List.Icon {...props} icon="dog" />}
						>
							<List.Item title="Salsicha"
								onPress={() => setRaca("Salsicha")
								} />
							<List.Item title="Vira-lata"
								onPress={() => setRaca("Vira-lata")
								} />
							<List.Item title="Poodle"
								onPress={() => setRaca("Poodle")} />
						</List.Accordion>
					</>
				)}
				{tipo === "Gato" && (
					<>
						<List.Accordion
							title={raca}
							theme={theme.colors}
							style={style.elements}
							left={props => <List.Icon {...props} icon="cat" />}
						>
							<List.Item title="Persa"
								onPress={() => setRaca("Persa")
								} />
							<List.Item title="Vira-lata"
								onPress={() => setRaca("Vira-lata")
								} />
							<List.Item title="Siamês"
								onPress={() => setRaca("Siamês")} />
						</List.Accordion>
					</>
				)}
				{tipo === "Coelho" && (
					<>
						<List.Accordion
							title={raca}
							theme={theme.colors}
							style={style.elements}
							left={props => <List.Icon {...props} icon="rabbit" />}
						>
							<List.Item title="Angorá"
								onPress={() => setRaca("Angorá")
								} />
							<List.Item title="Vira-lata"
								onPress={() => setRaca("Vira-lata")
								} />
							<List.Item title="Coelho leão"
								onPress={() => setRaca("Coelho leão")} />
						</List.Accordion>
					</>
				)}
				<View style={{ flexDirection: "row" }}>
					<View style={{ flex: 1 }}>
						<TextInput label="Anos"
							style={style.elements}
							value={anos}
							theme={theme.colors}
							onChangeText={anos => setAnos(anos)} />
					</View>
					<View style={{ flex: 1 }}>
						<TextInput label="Meses"
							style={style.elements}
							value={meses}
							theme={theme.colors}
							onChangeText={meses => setMeses(meses)} />
					</View>
				</View>
				<List.Accordion
					title={peso}
					style={style.elements}
					theme={theme.colors}
					left={props => <List.Icon {...props} icon="weight" />}>
					<List.Item title="2-5 kg"
						onPress={() => setPeso("2-5 kg")} />
					<List.Item title="5-10 kg"
						onPress={() => setPeso("5-10 kg")} />
					<List.Item title="10-15 kg"
						onPress={() => setPeso("10-15 kg")} />
				</List.Accordion>
				<List.Accordion
					title={porte}
					style={style.elements}
					theme={theme.colors}
					left={props => <List.Icon {...props} icon="dog-side" />}>
					<List.Item title="Pequeno"
						onPress={() => setPorte("Pequeno")} />
					<List.Item title="Médio"
						onPress={() => setPorte("Médio")} />
					<List.Item title="Grande"
						onPress={() => setPorte("Grande")} />
				</List.Accordion>
				<Text style={style.text}>Vacinado?</Text>
				<ToggleButton.Row
					onValueChange={value => setVacinado(value)}
					style={style.elementscenter}
					value={vacinado}>
					<ToggleButton
						icon="check"
						value="true"
					/>
					<ToggleButton
						icon="close"
						value="false"
					/>
				</ToggleButton.Row>
				<Text style={style.text}>Castrado?</Text>
				<ToggleButton.Row
					onValueChange={value => setCastrado(value)}
					style={style.elementscenter}
					value={castrado}>
					<ToggleButton
						icon="check"
						value="true"
					/>
					<ToggleButton
						icon="close"
						value="false"
					/>
				</ToggleButton.Row>
				<TextInput label="Telefone" theme={theme.colors}
					style={style.elements}
					value={telefone}
					onChangeText={telefone => setTelefone(telefone)} />
				<TextInput label="Email" theme={theme.colors}
					style={style.elements}
					value={email}
					onChangeText={email => setEmail(email)} />
				<TextInput label="Descrição*" theme={theme.colors}
					style={style.elements}
					multiline={true}
					numberOfLines={5}
					value={descricao}
					onChangeText={descricao => setDescricao(descricao)} />
				<Button
					style={style.botao}
					theme = {theme.colors}
					mode="contained"
					onPress={() => {
						if (nome === "" || raca === "" || peso === "" || porte === "" || descricao === "" || telefone === "" || email === "") {
							Alert.alert("Preencha todos os campos!");
						} else {
							axios.post("http://localhost:3000/pet", {
								nome: nome,
								raca: raca,
								peso: peso,
								porte: porte,
								vacinado: vacinado,
								castrado: castrado,
								telefone: telefone,
								email: email,
								descricao: descricao,
								idadeanos: anos,
								idademeses: meses,
								localizacao: localizacao
							}).then(() => {
								alert("Pet cadastrado com sucesso!");
								navigation.navigate("Home");
							}).catch(() => {
								alert("Erro ao cadastrar pet!");
							}
							);
						}
					}
					}>
					Cadastrar
				</Button>
			</ScrollView>
		</SafeAreaView>
	);
}


export default CriarPet;
