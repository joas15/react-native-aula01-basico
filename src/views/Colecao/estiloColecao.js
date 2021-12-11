import { StyleSheet } from 'react-native';
import estiloInicial from '../Inicial/estiloInicial';

const estiloColecao = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda: {
        backgroundColor: '#EAA0A0',
        width: '80%',
        height: '20%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 20,
        borderColor: '#C54242',
        backgroundColor: '#C54242',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
})
export default estiloColecao