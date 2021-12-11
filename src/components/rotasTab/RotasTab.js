import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={ {labelStyle: { fontSize: 24 },
                        style: {backgroundColor: '#C54242 '},
                        activeTintColor: '#000000'} }
        >
        <Tab.Screen name="Inicial" component={RotasDrawer} />
        <Tab.Screen name="Sobre" component={Perfil} />
        </Tab.Navigator>
    );
}

export default RotasTab