import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlansHomeScreen from '../screens/home/PlansHomeScreen';
import AddPlanNameScreen from '../screens/plans/AddPlanNameScreen/AddPlanNameScreen';
import AddExercisesScreen from '../screens/plans/AddExercisesScreen/AddExercisesScreen'
import PlanDetailScreen from '../screens/plans/PlanDetailScreen/PlanDetailScreen'
import AddExerciseDetailScreen from '../screens/plans/AddExerciseDetailScreen/AddExerciseDetailScreen'
import PlansHomeScreenNavigationOptions from '../screens/home/PlansHomeScreenNavigationOptions'
import AddPlanNameSCreenNavigationOptions from '../screens/plans/AddPlanNameScreen/AddPlanNameScreeNavigationOptions'
import AddExercisesScreenNavigationOptions from '../screens/plans/AddExercisesScreen/AddExercisesScreenNavigationOptions'
import PlanDetailScreenNavigationOptions from '../screens/plans/PlanDetailScreen/PlanDetailScreenNavigationOptions'
import AddExerciseDetailScreenNavigationOptions from '../screens/plans/AddExerciseDetailScreen/AddExerciseDetailScreenNavigationOptions'

import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

function PlansNavigator() {
    // TODO: investigate hooks and related issue to improve screen title translations
    const { t } = useTranslation()

    return (
        <Stack.Navigator>
            <Stack.Screen name='PlansHomeBottom' options={PlansHomeScreenNavigationOptions(t('plansHomeScreenTitle'))} component={PlansHomeScreen} />
            <Stack.Screen name='AddPlanName' options={AddPlanNameSCreenNavigationOptions(t('addPlanScreenTitle'))}  component={AddPlanNameScreen} />
            <Stack.Screen name='AddExercisesScreen' options={AddExercisesScreenNavigationOptions(t('addExercisesScreenTitle'))} component={AddExercisesScreen} />
            <Stack.Screen name='PlanDetailScreen' options={PlanDetailScreenNavigationOptions(t('planDetailScreenTitle'))} component={PlanDetailScreen} />
            <Stack.Screen name='AddExerciseDetail' options={AddExerciseDetailScreenNavigationOptions(t('addExerciseDetailScreenTitle'))} component={AddExerciseDetailScreen} />
        </Stack.Navigator>
    )
}

export default PlansNavigator;