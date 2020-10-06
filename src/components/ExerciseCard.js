import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
    return (
        <View style={styles.container}>
            <Text>{exerciseData.name}</Text>
            <Text>Sets: {exerciseData.sets}</Text>
            <Text>Reps: {exerciseData.repetitions}</Text>
            <Text>Kgs: {exerciseData.kgs}</Text>
        </View>
        
    )
}

export default ExerciseCard;