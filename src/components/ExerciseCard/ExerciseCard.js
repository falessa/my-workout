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
        borderRadius: 10
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    exerciseDataContainer: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingLeft: 10
    }
})

const ExerciseCard = ({ exerciseData }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>{exerciseData.name}</Text>
                <View style={styles.exerciseDataContainer}>
                    <View style={styles.exerciseDataContainer}>
                        <Text style={styles.boldText}>{exerciseData.sets}</Text>
                        <Text> {t('sets')}</Text>
                    </View>

                    <View style={styles.exerciseDataContainer}>
                        <Text style={styles.boldText}>{exerciseData.repetitions}</Text>
                        <Text> {t('repetitions')}</Text>
                    </View>

                    <View style={styles.exerciseDataContainer}>
                        <Text style={styles.boldText}>{exerciseData.kgs}</Text>
                        <Text> {t('kgs')}</Text>
                    </View>
                </View>
        </View>
        
    )
}

export default ExerciseCard;