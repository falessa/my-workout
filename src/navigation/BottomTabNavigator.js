import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlansNavigator from './PlansNavigator'
import SettingsNavigator from './SettingsNavigator'
import TabBarIcon from '../components/TabBarIcon'
import TabBarLabel from '../components/TabBarLabel'
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

function ButtomTabNavigator() {
    const { t } = useTranslation()

    const PlansOptions = {
        tabBarLabel: ({ focused }) => ( 
            <TabBarLabel labelText={t('plansBottomTabTitle')} focused={focused}/>
        ),
        tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName={'file-tray-full'} focused={focused}/>
        )
    }

    const SettingsOptions = {
        tabBarLabel: ({ focused }) => ( 
            <TabBarLabel labelText={t('settingsBottomTabTitle')} focused={focused}/>
        ),
        tabBarIcon: ({ focused }) => (
            <TabBarIcon iconName={'md-settings'} focused={focused}/>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='PlansHomeNavigator' options={PlansOptions} component={PlansNavigator}/>
                <Tab.Screen name='SettingsNavigator' options={SettingsOptions} component={SettingsNavigator}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ButtomTabNavigator;