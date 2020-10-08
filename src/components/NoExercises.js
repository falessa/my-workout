import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const NoExercises = ({ day }) => {
    return (
        
        <View style={styles.container}>
            <Text>No exercises added yet for day {day}</Text>
        </View>
        
    )
}

export default NoExercises