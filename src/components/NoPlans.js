import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const NoPlans = ({ onPress }) => {
    return (
        
        <View style={styles.container}>
            <Text>Add a workout plan to start training now!</Text>
            <Button title='Add workout plan' onPress={onPress}/>
        </View>
        
    )
}

export default NoPlans