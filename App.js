import React from 'react';
import { StyleSheet, Text, View, TextInput, InputAccessoryView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>		  
		<Image
        style={styles.steve}
        source={{
          uri: 'https://elianaatihe.files.wordpress.com/2014/11/stevie_wonder.jpg',
        }}
      	/>
      	<Text style={styles.titulo}>Oloco Meu</Text>
      	<Text style={styles.label}> Nome: </Text>
		<TextInput
			style={styles.input}  
		/>
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
	
	titulo: {
		fontSize: 30,
		fontFamily: 'Cochin',
	},
	
	input: {
	 	backgroundColor: '#00FFFF',
		borderWidth: 1,
	},
	
	steve: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
