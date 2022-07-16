import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { BottomNavigation, Button } from 'react-native-paper'
import style from './style/style';

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

	return (
		<>
			<Text>Tela Inicial</Text>
			<Button title="Criar Pet"
				style={style.botao} 
				onPress={() => navigation.navigate('CriarPet')}>
				Cadastar Pet
			</Button>
			<BottomNavigation
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				barStyle={{ backgroundColor: '#DB652F' }}
			/>
		</>
	)
}


// este estava no commit do de 3 dias atrás
// import { Text, StyleSheet } from 'react-native'
// import React from 'react'

// export default function TelaInicial ({ navigation }) {

// 	return (
// 		<>
// 			<Text>Tela Inicial</Text>
			
// 		</>
		
// 	)
// }

