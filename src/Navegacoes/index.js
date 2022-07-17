import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import DrawerNavigation from "./DrawerNavigation";
import StackNavigation from "./StackNavigation";


export default props =>(
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
)