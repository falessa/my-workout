import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansNavigator from './PlansNavigator'
import HelpNavigator from './HelpNavigator'

const Tab = createBottomTabNavigator();

function ButtomTabNavigator() {
    <Tab.Navigator>
        <Tab.Screen name='PlansHomeNavigator' component={PlansNavigator}/>
        <Tab.Screen name='HelpNavigator' component={HelpNavigator} />
    </Tab.Navigator>
}

export default ButtomTabNavigator;