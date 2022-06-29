import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { BottomNavigation, Button } from 'react-native-paper'

export default function TelaInicial({ navigation }) {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'home', title: 'Home', icon: 'home' },
		{ key: 'favoritos', title: 'Favoritos', icon: 'heart' },
		{ key: 'adocao', title: 'Adoção', icon: 'paw' },
		{ key: 'chat', title: 'Chat', icon: 'chat' },
	]);
	const renderScene = ({ route }) => {
		switch (route.key) {
			case 'home':
				return null;
			case 'favoritos':
				return null;
			case 'adocao':
				return null;
			case 'chat':
				return null;
			default:
				return null;
		}
	}

	const styles = StyleSheet.create({
		botao: {
			width: 310,
			alignSelf: 'center',
			marginBottom: 30,
			width: '80%',
			padding: 8,
			textAlign: 'center',
			borderRadius: 40,
			marginTop: 20,
			backgroundColor: '#DB652F',
		}
	});

	return (
		<>
			<Text>Tela Inicial</Text>
			<Button title="Criar Pet" theme={
				{ colors: { primary: 'white' } }
			} style={styles.botao} onPress={() => navigation.navigate('CriarConta')}>
				Cadastar Pet</Button>
			<BottomNavigation
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				barStyle={{ backgroundColor: '#DB652F' }}
			/>
		</>
	)
}


