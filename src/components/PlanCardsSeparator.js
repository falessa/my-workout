import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 15,
    }
})

const PlanCardsSeparator = () => {
    return (
        <View style={styles.separator} />
    )
}

export default PlanCardsSeparator;