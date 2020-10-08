import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlansHomeScreen from '../screens/PlansHomeScreen';
import AddPlanNameScreen from '../screens/AddPlanNameScreen';
import PlanDayDetailScreen from '../screens/PlanDayDetailScreen'
import PlanDetailScreen from '../screens/PlanDetailScreen'

const Stack = createStackNavigator();

function PlansNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PlansHomeBottom' component={PlansHomeScreen} />
            <Stack.Screen name='AddPlanName' component={AddPlanNameScreen} />
            <Stack.Screen name='PlanDayDetailScreen' component={PlanDayDetailScreen} />
            <Stack.Screen name='PlanDetailScreen' component={PlanDetailScreen} />
        </Stack.Navigator>
    )
}

export default PlansNavigator;