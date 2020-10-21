import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const NoExercises = ({ day }) => {
    const { t } = useTranslation()

    return (
        
        <View style={styles.container}>
            <Text>{t('noExercisesAddedForDay')} {day}</Text>
        </View>
        
    )
}

export default NoExercises