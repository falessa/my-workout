import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    activeText: {
        color: '#386fa4',
        fontSize: 12,
        fontWeight: 'bold'
    },
    inactiveText: {
        color: '#495057',
        fontSize: 12,
        fontWeight: 'bold'
    }
})

const TabBarLabel = ({ labelText, focused }) => {
    return (
        <Text style={focused ? styles.activeText : styles.inactiveText}>{labelText}</Text>
    )
}

export default TabBarLabel;