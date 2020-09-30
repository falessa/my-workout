import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlansHomeScreen from '../screens/PlansHomeScreen';
import AddPlanName from '../screens/AddPlanName';

const Stack = createStackNavigator();

function PlansNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PlansHomeBottom' component={PlansHomeScreen} />
            <Stack.Screen name='AddPlanName' component={AddPlanName} />
        </Stack.Navigator>
    )
}

export default PlansNavigator;