import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator>
        <Drawer.Screen name = 'HomeDrawer' component={StackNavigation} />
    </Drawer.Navigator>

)