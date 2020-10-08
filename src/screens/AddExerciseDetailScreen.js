import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Add exercise detail screen</Text>
        </View>
    )
}