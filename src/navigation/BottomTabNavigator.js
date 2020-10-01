import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansNavigator from './PlansNavigator'
import HelpNavigator from './HelpNavigator'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function ButtomTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='PlansHomeNavigator' component={PlansNavigator}/>
                <Tab.Screen name='HelpNavigator' component={HelpNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ButtomTabNavigator;