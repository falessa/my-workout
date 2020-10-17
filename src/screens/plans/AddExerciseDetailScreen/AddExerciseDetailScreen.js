import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { addExerciseToDayPlan } from '../../../redux/temporalPlan'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation()
    const { day } = route.params
    const dispatch = useDispatch()

    const [name, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setReps] = useState('')
    const [kgs, setKgs] = useState('')

    const addExerciseToPlan = () => {
        dispatch(addExerciseToDayPlan({ name, sets, repetitions, kgs, day }))
        navigation.navigate('AddExercisesScreen', { exercises:[{ name, sets, repetitions, kgs, day }]})
    }

    return (
        <View style={styles.container}>
            <Text>{t('addExerciseDetails')}</Text>
            <TextInput style={styles.input} onChangeText={name => setExerciseName(name)} placeholder={t('enterExerciseName')}/>
            <TextInput style={styles.input} onChangeText={sets => setSets(sets)} placeholder={t('enterSets')}/>
            <TextInput style={styles.input} onChangeText={repetitions => setReps(repetitions)} placeholder={t('enterRepetitions')}/>
            <TextInput style={styles.input} onChangeText={kgs => setKgs(kgs)} placeholder={t('enterKgs')}/>
            <Button title={t('addExerciseToDay') + " " + day} onPress={() => addExerciseToPlan()}/>
        </View>
    )
}