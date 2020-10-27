import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        marginBottom: 8,
        paddingHorizontal: 10,
        height: 40,
        borderColor: '#eee',
        borderWidth: 2,
        borderRadius: 20,
        width: '60%'
      },
})

const TextInputCustom = ({ keyboardType, onChangeText, placeholder='' }) => {
    return ( 
        <TextInput keyboardType={keyboardType} style={styles.input} onChangeText={onChangeText} placeholder={placeholder}/>    
    )
}

export default TextInputCustom