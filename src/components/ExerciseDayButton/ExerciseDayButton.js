import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '85%',
    },
    dayButton: {
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 8,
        marginTop: 8,
        padding: 10
    },
    dayButtonText: {
        fontSize: 18,
    },

    dayButtonTextActive: {
        fontWeight: 'bold',
        color: '#386fa4'
    },
    dayButtonTextInactive: {
        fontWeight: 'normal',
        color: '#495057'
    },
    dayButtonActive: {
        borderColor: '#386fa4',
        backgroundColor: '#dedfe0', // c6ccd2
        borderWidth: 3
    },
    dayButtonInactive: {
        backgroundColor: '#eee',
        borderColor: '#828f9b', // 6c757d 495057 828f9b
    }
})

const ExerciseDayButton = ({ text, onPress, selected }) => {
    return (
        <TouchableOpacity style={selected ? [styles.dayButton, styles.dayButtonActive] : [styles.dayButton, styles.dayButtonInactive]} onPress={onPress}>
            <Text style={selected ? [styles.dayButtonText, styles.dayButtonTextActive] : [styles.dayButtonText, styles.dayButtonTextInactive] }>{text}</Text>
        </TouchableOpacity>
    )
}

export default ExerciseDayButton;