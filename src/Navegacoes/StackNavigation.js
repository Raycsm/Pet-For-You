import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from '../pages/Login';
import CriarConta from '../pages/CriarConta';
import EsqueciSenha from '../pages/EsqueciSenha';
import MeuPerfil from '../pages/MeuPerfil';
import TelaInicial from '../pages/TelaInicial';
import Notificacoes from '../pages/Notificacoes';
import SobreNos from '../pages/SobreNos';
import Chat from '../pages/Chat';
import Adocao from '../pages/Adocao';
import PetsFavoritos from '../pages/PetsFavoritos';

import ShowBottomTabs from "./BottomTabs";


const Stack = createNativeStackNavigator()


    export default props => (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name ="Login" component={Login} />
            <Stack.Screen name = "CriarConta" component={CriarConta} />
            <Stack.Screen name = "EsqueciSenha" component={EsqueciSenha} />
            <Stack.Screen name =  "TelaInicial" component={ShowBottomTabs} />
        </Stack.Navigator>
    )

    export function TelaInicialNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="TelaInicial" component={TelaInicial}/>
        </Stack.Navigator> 
        )
    }
    export function MeuPerfilNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='MeuPerfil' component={MeuPerfil}/>
        </Stack.Navigator> 
        )
    }
    export function NotificacoesNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Notificacoes" component={Notificacoes}/>
        </Stack.Navigator> 
        )
    }
    export function SobreNosNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SobreNos" component={SobreNos}/>
        </Stack.Navigator> 
        )
    }
    export function ChatNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Chat" component={Chat}/>
        </Stack.Navigator> 
        )
    }
    export function FavoritosNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Favoritos" component={PetsFavoritos}/>
        </Stack.Navigator> 
        )
    }
    export function AdocaoNavigation (){

        return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Adocao" component={Adocao}/>
        </Stack.Navigator> 
        )
    }