import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
	container: {
flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff8e7',
},
borda: {
	backgroundColor: '#FFFFFF',
	width: '80%',
	height: '30%',
	borderReadius: 10,
	
},
texto: {
	fontSize: 20,
	color: '#000000',
	fontWeight: 'bold',
	textAlign: "center",
	padding: 10,
},
botaoContainer: {
marginTop:10,
marginBottom: 20,
marginLeft: 40,
marginRight: 40,
borderRadius: 5,
height: 40,
borderWidth: 2,
borderColor: '#e8f2e9',
backgroundColor: '#14417b',
justifyContent: 'center',
alignItems: 'center',
},
	botaoTexto: {
	fontSize: 18,
	color: '#FFFFFF',
	fontWeight: 'bold'
},
});

export default estiloPerfil;