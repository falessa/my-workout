import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#495057',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'normal'
    }
})

const TextPrimary = ({ text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

export default TextPrimary