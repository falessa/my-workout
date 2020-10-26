import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '85%',
    },
    dayButton: {
        backgroundColor: '#eee',
        borderColor: '#386fa4',
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 8,
        marginTop: 8,
        padding: 10
    },
    dayButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#386fa4'
    }
})

const ExerciseDayButton = ({ text, onPress }) => {
    return (
        // <View>
            <TouchableOpacity style={styles.dayButton} onPress={onPress}>
                <Text style={styles.dayButtonText}>{text}</Text>
            </TouchableOpacity>
        // </View>
    )
}

export default ExerciseDayButton;