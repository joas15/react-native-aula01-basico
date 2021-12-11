import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }

return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
        <h6> </h6>
            <Text style={estiloPerfil.texto}> Sobre </Text>
           
            <center>
            <Text style={estiloPerfil.texto}>  Desenvolvi o trabalho pensando em como mostrar a minha banda favorita, Ghost é de longe uma das melhores criações da humanidade, criei essa página mais uma pra mostrar as melhores faixas e outra pra mostrar um pouca da história da banda   </Text>
            </center>
                
            </View>

            <img src="https://media.discordapp.net/attachments/676519090029985829/919015626247372800/ghost.png" width="600px" height="400px"/>
            <h1></h1> 
<h5> Todos os direitos reservados ©  Joás Pereira Moreira </h5> 
 
    </View>
    
)
}
export default Perfil;
