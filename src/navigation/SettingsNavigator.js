import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

function PlansNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default PlansNavigator;