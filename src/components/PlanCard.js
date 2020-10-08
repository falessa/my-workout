import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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

const PlanCard = ({ planData, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text>{planData.name}</Text>
                <Text>{planData.daysPerWeek} days/week</Text>
                <Text>Created at {planData.creationDate}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default PlanCard;