import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, InputAccessoryView, Image, TouchableOpacity, Component } from 'react-native';

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
	
	function subtrair(){
	let r = parseFloat(valor1) - parseFloat(valor2);
	setResultado(r);
	}
	
	function multiplicar(){
		let r = parseFloat(valor1) * parseFloat(valor2);
		setResultado(r);
	}
	
	function dividir(){
		let r = parseFloat(valor1) / parseFloat(valor2);
		setResultado(r);
	}

	function lerNome(){
		setNome(nomeTxt);
	}
	
	return (
		<View style={styles.container}>	
			
			<Text style={styles.titulo}>Steve's Calculator</Text>
			
			<Image
				style={styles.steve}
				source={{
				  uri: 'https://elianaatihe.files.wordpress.com/2014/11/stevie_wonder.jpg',
				}}
			/>
			
			
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
					onChangeText={(valor)=>setValor1(valor)}
				/>
			</View>
			
			<View style={styles.bloco}>
				<Text style={styles.label}> Valor 2: </Text>
				<TextInput
					style={styles.input}
					value={valor2}
					onChangeText={(valor)=>setValor2(valor)}
				/>
			</View>
			
			<View style={styles.botao}>
				<TouchableOpacity style={styles.botao1} onPress={somar}>
					<Text style={styles.botaotxt}>Somar</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.botao1} onPress={subtrair}>
					<Text style={styles.botaotxt}>Subtrair</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.botao1} onPress={multiplicar}>
					<Text style={styles.botaotxt}>Multiplicar</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.botao1} onPress={dividir}>
					<Text style={styles.botaotxt}>Dividir</Text>
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
		marginTop: 10,
		marginBottom:10,
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
		height: 30,
		alignItems: 'baseline',
		justifyContent: 'space-evenly',
		backgroundColor: '#00FFFF',
		flexDirection: 'row',
		borderWidth: 1,
		gap: 10,
	},
	
	botao1: {
		width: 90,
		height: 30,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	
	botao2: {
		width: 90,
		height: 30,
		alignItems: 'center',

	},
	
	botao3: {
		width: 90,
		height: 30,
		alignItems: 'center',
	},
	
	botao4: {
		width: 90,
		height: 30,
		alignItems: 'center',
	},
	
	
	botaotxt: {
		margin: 5,
	}
});
