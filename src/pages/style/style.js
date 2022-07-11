import { StyleSheet } from "react-native";
import * as React from "react";

const style = StyleSheet.create({
	botao: {
        width:310, 
        alignSelf: 'center',
        marginBottom: 30,
        width: '80%',
        padding: 8,
        textAlign:'center',
        borderRadius: 40,
        marginTop:20,
        backgroundColor: '#DB652F',
    },
    conteudo: {
		backgroundColor: 'white',
	},
	content: {
		display: "flex",
		flex: 1,
        // alignItems: "center",
		// justifyContent: "center",
		// flexDirection: "row",
		// backgroundColor: 'black',
	},
	input: {
        marginBottom: 15,
        width:310,
        borderRadius:'10',
        alignSelf: 'center',
        backgroundColor:'#E7E6E5',
        fontSize:14, 
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

export default style;