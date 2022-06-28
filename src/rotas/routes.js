import React from "react";

import Login from "../pages/Login";
import CriarConta from "../pages/CriarConta";
import TelaInicial from "../pages/TelaInicial";
import EsqueciSenha from "../pages/EsqueciSenha";
import MeuPerfil from "../pages/MeuPerfil";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"



const Routes = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                options={{headerShown:false} }
                name = "Login" 
                component={Login}
                />
                <Stack.Screen 
                options={{headerShown:false} }
                name = "CriarConta" 
                component={CriarConta}
                />
                 <Stack.Screen 
                options={{headerShown:false} }
                name = "EsqueciSenha" 
                component={EsqueciSenha}
                />
                <Stack.Screen 
                options={{headerShown:false} }
                name = "TelaInicial" 
                component={TelaInicial}
                />
                <Stack.Screen 
                options={{headerShown:false} }
                name = "MeuPerfil" 
                component={MeuPerfil}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;