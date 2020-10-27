import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { addExerciseToDayPlan } from '../../../redux/temporalPlan'
import { StyleSheet, View, Text } from 'react-native';
import MainButton from '../../../components/MainButton'
import TextInput from '../../../components/TextInput'
import TextSecondary from '../../../components/Text/TextSecondary/TextSecondary'
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100

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
            <TextSecondary text={t('enterExerciseName') + ":"}/>
            <TextInput onChangeText={name => setExerciseName(name)} placeholder={t('enterExerciseNamePlaceholder')}/>
            <TextSecondary text={t('enterSets') + ":"}/>
            <TextInput keyboardType='numeric' onChangeText={sets => setSets(sets)} placeholder={t('enterSetsPlaceholder')}/>
            <TextSecondary text={t('enterRepetitions') + ":"}/>
            <TextInput keyboardType='numeric' onChangeText={repetitions => setReps(repetitions)} placeholder={t('enterRepetitionsPlaceholder')}/>
            <TextSecondary text={t('enterKgs') + ":"}/>
            <TextInput keyboardType='numeric' onChangeText={kgs => setKgs(kgs)} placeholder={t('enterKgsPlaceholder')}/>
            <MainButton text={t('addExerciseToDay') + " " + day} onPress={() => addExerciseToPlan()}/>
        </View>
    )
}