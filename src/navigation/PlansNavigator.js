import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlansHomeScreen from '../screens/PlansHomeScreen';
import AddPlanNameScreen from '../screens/AddPlanNameScreen';
import PlanDayDetailScreen from '../screens/PlanDayDetailScreen'

const Stack = createStackNavigator();

function PlansNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PlansHomeBottom' component={PlansHomeScreen} />
            <Stack.Screen name='AddPlanName' component={AddPlanNameScreen} />
            <Stack.Screen name='PlanDayDetailScreen' component={PlanDayDetailScreen} />
        </Stack.Navigator>
    )
}

export default PlansNavigator;