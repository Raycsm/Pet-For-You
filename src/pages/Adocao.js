import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import style from './style/style';
import theme from './style/theme';

const styles = StyleSheet.create({
	item: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		margin: "10px",
		maxHeight: "110px"
	},
	text: {
		fontSize: 20,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: '#fff',
	}
})

export default function Adocao() {
	return (
		<>
		<Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop:20 }}>Adoção</Text>
        <View style={style.grid}>
            <TouchableOpacity>
                <Card style={{backgroundColor: '#DB652F'}} mode="elevated" elevation={3}>
                    <Card.Content style={styles.item}>
                        <Avatar.Icon theme={theme} icon="dog" size={85}/>
                        <Text style={styles.text}>Cadastrar Pet</Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={{backgroundColor: '#DB652F'}} mode="elevated" elevation={3}>
                    <Card.Content style={styles.item}>
                        <Avatar.Icon theme={theme} icon="paw" size={85}/>
                        <Text style={styles.text}>Meus pets</Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={{backgroundColor: '#DB652F'}} mode="elevated" elevation={3}>
                    <Card.Content style={styles.item}>
                        <Avatar.Icon theme={theme} icon="cat" size={85}/>
                        <Text style={styles.text}>Candidaturas de adoção</Text>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
        </>
	)
}
