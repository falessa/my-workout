import React from 'react'
import { Text } from 'react-native'
// import { useTranslation } from 'react-i18next';


const navigationOptions = (settingsScreenTitle) => {
    // TODO: check comment about hooks in SettingsNavigator
    // const { t } = useTranslation()

    return {
        headerTitle: settingsScreenTitle
        // headerTitle: t('settingsScreenTitle')
        // headerTitle: () => <Text>{t('settingsScreenTitle')}</Text>
    }
}

export default navigationOptions