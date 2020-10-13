import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { addExerciseToDayPlan } from '../redux/temporalPlan'
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

export default function App({ route, navigation }) {
    const { day } = route.params
    const dispatch = useDispatch();

    const [name, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setReps] = useState('')
    const [kgs, setKgs] = useState('')

    const temporalPlan = useSelector(store => store.temporalPlan)

    const addExerciseToPlan = () => {
        dispatch(addExerciseToDayPlan({ name, sets, repetitions, kgs, day }))
        navigation.navigate('AddExercisesScreen', { exercises:[{ name, sets, repetitions, kgs, day }]})
    }

    return (
        <View style={styles.container}>
            <Text>Add exercise detail screen</Text>
            <TextInput style={styles.input} onChangeText={name => setExerciseName(name)} placeholder='Enter the exercise name'/>
            <TextInput style={styles.input} onChangeText={sets => setSets(sets)} placeholder='Enter number of sets'/>
            <TextInput style={styles.input} onChangeText={repetitions => setReps(repetitions)} placeholder='Enter number of repetitions'/>
            <TextInput style={styles.input} onChangeText={kgs => setKgs(kgs)} placeholder='Enter kgs'/>
            <Button title={'Add exercise to day ' + day} onPress={() => addExerciseToPlan()}/>
        </View>
    )
}