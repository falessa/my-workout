import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 10,
    }
})

const ExerciseCard = ({ exerciseData }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{exerciseData.name}</Text>
            <Text>{t('sets')}: {exerciseData.sets}</Text>
            <Text>{t('repetitions')}: {exerciseData.repetitions}</Text>
            <Text>{t('kgs')}: {exerciseData.kgs}</Text>
        </View>
        
    )
}

export default ExerciseCard;