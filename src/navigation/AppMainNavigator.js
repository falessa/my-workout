import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlansHomeScreen from '../screens/PlansHomeScreen';
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator();

function AppMainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Plans' component={PlansHomeScreen} /> */}
                <Stack.Screen name='BottomTab' component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppMainNavigator;