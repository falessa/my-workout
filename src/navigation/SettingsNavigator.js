import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from '../screens/settings/SettingsScreen';
import LanguageScreen from '../screens/settings/LanguageScreen';

const Stack = createStackNavigator();

function SettingsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' options={{headerTitle: "Settings !!"}} component={SettingsScreen} />
            <Stack.Screen name='LanguageScreen' component={LanguageScreen} />
        </Stack.Navigator>
    )
}

export default SettingsNavigator;