import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MainButton from '../MainButton'
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const NoPlans = ({ onPress }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{t('noPlans')}</Text>
            {/* <Button title={t('addPlan')} onPress={onPress}/> */}
            <MainButton onPress={onPress} text={t('addPlan')}/>

        </View>
        
    )
}

export default NoPlans