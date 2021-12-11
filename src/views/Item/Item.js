import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}> Faixas e Músicas </Text>
                        <Text style={estiloItem.texto}> Opus Eponymous primeiro álbum da banda com um rock mais psicodelico e pop, suas princpais músicas são Com clavi con dio e Satan Prayer.
				Infestissumam foi o segundo álbum da banda e estourou muito a banda e gerou muita polêmica, eles participaram o rock in rio tocando esse álbum e acabaram recebendo críticas negativas pelo estilo de música e suas letras, suas principais músicas são Monstrance Clock, Zombie Queen e Year Zero.

		Meliora é o 3 álbum o mais famoso, conta com um estilo mais pop com as faixas He is, Spirit e Cirice. </Text>
                
            </View>
                
            <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
    
            
            
            <Text style={estiloItem.escrita}> Todos os direitos reservados © Joás Pereira Moreira </Text>

        </View>
    )
}
export default Item;
