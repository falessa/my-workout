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

const NoExercises = () => {
    return (
        
        <View style={styles.container}>
            <Text>No exercises added yet</Text>
        </View>
        
    )
}

export default NoExercises