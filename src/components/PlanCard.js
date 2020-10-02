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

const PlanCard = ({ planData }) => {
    return (
        <View style={styles.container}>
            <Text>{planData.name}</Text>
            <Text>{planData.frequency}</Text>
            <Text>Created at {planData.creationDate}</Text>
        </View>
        
    )
}

export default PlanCard;