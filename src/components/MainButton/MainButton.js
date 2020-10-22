import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#386fa4',
        paddingVertical: 5,
        borderRadius: 20
    },
    text: {
        fontSize: 18,
        color: 'white',
        // justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
})

const MainButton = ({onPress, text}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MainButton