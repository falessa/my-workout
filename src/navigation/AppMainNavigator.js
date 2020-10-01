// TODO: no longer necessary
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlansHomeScreen from '../screens/PlansHomeScreen';
import BottomTabNavigator from './BottomTabNavigator'
import PlansNavigator from './PlansNavigator';

const Stack = createStackNavigator();

function AppMainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name='Plans' component={PlansNavigator} /> */}
                <Stack.Screen name='BottomTab' component={BottomTabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppMainNavigator;