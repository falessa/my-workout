import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        height: 30,
        width: 190,
    }
})

export default function App() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter the plan name'/>
            <Button title='Continue to add exercises'/>
        </View>
    )
}