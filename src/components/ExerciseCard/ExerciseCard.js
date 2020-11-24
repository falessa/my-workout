import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
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
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

const ExerciseCard = ({ exerciseData }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>{exerciseData.name}</Text>
                <View style={styles.exerciseDataContainer}>
                    <FlatList data={exerciseData.setDetails}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) =>
                            <View style={styles.exerciseDataContainer}>
                                <View style={styles.exerciseDataContainer}>
                                    <Text style={styles.boldText}>{item.sets}</Text>
                                    <Text> {t('sets')}</Text>
                                </View>

                                <View style={styles.exerciseDataContainer}>
                                    <Text style={styles.boldText}>{item.repetitions}</Text>
                                    <Text> {t('repetitions')}</Text>
                                </View>

                                <View style={styles.exerciseDataContainer}>
                                    <Text style={styles.boldText}>{item.kgs}</Text>
                                    <Text> {t('kgs')}</Text>
                                </View>
                            </View>
                        } />

                </View>
        </View>
        
    )
}

export default ExerciseCard;