import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        height: 30,
        width: 190,
    },
})

export default function App({ route }) {
    const { day } = route.params

    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [kgs, setKgs] = useState('')

    return (
        <View style={styles.container}>
            <Text>Add exercise detail screen</Text>
            <TextInput style={styles.input} onChangeText={exerciseName => setName(exerciseName)} placeholder='Enter the exercise name'/>
            <TextInput style={styles.input} onChangeText={exerciseName => setName(exerciseName)} placeholder='Enter number of sets'/>
            <TextInput style={styles.input} onChangeText={exerciseName => setName(exerciseName)} placeholder='Enter number of repetitions'/>
            <TextInput style={styles.input} onChangeText={exerciseName => setName(exerciseName)} placeholder='Enter kgs'/>
            <Button title={'Add exercise to day ' + day} />
        </View>
    )
}