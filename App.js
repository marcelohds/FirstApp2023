import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, InputAccessoryView, Image, TouchableOpacity } from 'react-native';

export default function App() {
	const[nome, setNome] = useState("");
	const[nomeTxt, setNomeTxt] = useState("");

	const[valor1, setValor1] = useState(0);
	const[valor2, setValor2] = useState(0);
	const[resultado, setResultado] = useState(0);

	
	function somar(){
		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	
	function lerNome(){
		setNome(nomeTxt);
	}
	
	return (
		<View style={styles.container}>		
			
			<Image
				style={styles.steve}
				source={{
				  uri: 'https://elianaatihe.files.wordpress.com/2014/11/stevie_wonder.jpg',
				}}
			/>
				
			<Text style={styles.titulo}>Aplicativo do Balacobaco</Text>
			
			
			<View style={styles.bloco}>
				<Text style={styles.label}> Nome: </Text>
				<TextInput 
					  style={styles.input}
					  value={nomeTxt}
					  onChangeText={(texto)=>setNomeTxt(texto)}
				/>


				<TouchableOpacity style={styles.botao} onPress={lerNome}>
					<Text style={styles.botaotxt}>Enviar</Text>
				</TouchableOpacity>

				<Text style={styles.label1}> Nome: {nome}</Text>
			</View>
			
			<View style={styles.bloco}>
				<Text style={styles.label}> Valor 1: </Text>
				<TextInput
					style={styles.input}
					value={valor1}
					onChangeText={setValor1}
				/>
			</View>
			
			<View style={styles.bloco}>
				<Text style={styles.label}> Valor 2: </Text>
				<TextInput
					style={styles.input}
					value={valor2}
					onChangeText={setValor2}
				/>
			</View>
			
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.botao} onPress={somar}>
					<Text style={styles.botaotxt}>Somar</Text>
				</TouchableOpacity>
			</View>
			
			<View style={styles.bloco}>
				<Text style={styles.label}> Resultado: {resultado} </Text>
			</View>
			
			
			
		</View>
	);
}

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center',
  	},
	
	bloco: {
		alignItems: 'center'
	},
	
	titulo: {
		fontSize: 20,
		fontFamily: 'Cochin',
		margin: 10,
	},
	
	label1: {
		marginTop: 20,
	},
	
	input: {
	 	backgroundColor: '#00FFFF',
		borderWidth:2,
		fontSize:20
	},
	
	steve: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	botao: {
		margin: 10,
		width: 150,
		height: 30,
		alignItems: 'center',
		backgroundColor: '#00FFFF',
		borderWidth: 1,
	},
	
	botaotxt: {
		margin: 5,
	}
});
