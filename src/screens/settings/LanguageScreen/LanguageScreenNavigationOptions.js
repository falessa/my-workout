import React from 'react'
import { Text } from 'react-native'
// import { useTranslation } from 'react-i18next';

const navigationOptions = (languageScreenTitle) => {
    // TODO: check comment about hooks in SettingsNavigator
    // const { t } = useTranslation()

    return {
        headerTitle: languageScreenTitle,
        // headerTitle: t('languageScreenTitle'),
        // headerTitle: () => <Text>{t('settingsScreenTitle')}</Text>


    }
}

export default navigationOptions