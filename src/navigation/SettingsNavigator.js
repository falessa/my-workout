import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from '../screens/settings/SettingsScreen/SettingsScreen';
import LanguageScreen from '../screens/settings/LanguageScreen/LanguageScreen';
import SettingsScreenNavigationOptions from '../screens/settings/SettingsScreen/SettingsScreenNavigationOptions'
import LanguageScreenNavigationOptions from '../screens/settings/LanguageScreen/LanguageScreenNavigationOptions'
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

function SettingsNavigator() {
    // TODO: useTranslation hook declared here because declaring it at SettingsScreenNavigationOptions and LanguageScreenNavigationOptions causes
    // Error: Should have a queue. This is likely a bug in React. Please file an issue.
    // Investigate the use of hooks and its rules
    const { t } = useTranslation()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Settings' options={SettingsScreenNavigationOptions(t('settingsScreenTitle'))} component={SettingsScreen}/>
            <Stack.Screen name='LanguageScreen' options={LanguageScreenNavigationOptions(t('languageScreenTitle'))} component={LanguageScreen} />
        </Stack.Navigator>
    )
}

export default SettingsNavigator;