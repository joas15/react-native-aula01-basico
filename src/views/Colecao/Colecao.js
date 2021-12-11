import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}> Banda </Text>
                        <Text style={estiloColecao.texto}> Ghost é uma banda sueca formada em 2008, o estilo da banda mistura doom metal, heavy metal tradicional, rock psicodélico típico dos anos 70, somado ao rock alternativo mais moderno. As letras das músicas são, em sua maioria, de cunho satanista de forma teatral. Os papas são os cantores, sendo 3 respectivos a ordem de cada álbum, Papa Emeritos 1, Papa Emeritos 2 e 3 </Text>

                
            </View>
            <img src=" https://media.discordapp.net/attachments/676519090029985829/919041329806323782/chupamonarquia.png" witdh="400px" height="400px"/>

            <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
             </TouchableOpacity>
            
            <h5> Todos os direitos reservados © Joás Pereira Moreira</h5> 

        </View>
    )
} 
export default Colecao;
