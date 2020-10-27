import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: '#343a40',
        textAlign: 'center',
        margin: 20,
        fontWeight: 'bold'
    }
})

const TextPrimary = ({ text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

export default TextPrimary