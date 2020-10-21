import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { createTemporalPlan } from '../../../redux/temporalPlan'
import { useTranslation } from 'react-i18next';


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

export default function App({ navigation }) {
    const { t } = useTranslation()

    const [planName, setName] = useState('')
    const [daysPerWeek, setDaysPerWeek] = useState('')
    let dispatch = useDispatch();

    const createEmptyPlanDetails = (daysPerWeek) => {
        // add plan details array to the temporal plan that is being created
        let planDetailsArray = new Array(daysPerWeek)
        for (let i = 0; i < planDetailsArray.length; i++) {
            planDetailsArray[i] = { day: i + 1, exercises: [] }
        }

        return planDetailsArray
    }

    const goToAddExercisesScreen = () => {
        dispatch(createTemporalPlan({name: planName, daysPerWeek: daysPerWeek, planDetails: createEmptyPlanDetails(daysPerWeek) }))
        navigation.navigate('AddExercisesScreen', {planId: ''})
    }
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={planName => setName(planName)} placeholder={t('enterPlanName')}/>
            <TextInput style={styles.input} onChangeText={daysPerWeek => setDaysPerWeek(parseInt(daysPerWeek))} placeholder={t('daysPerWeek')}/>
            <Button title={t('continueToAddExercises')}  onPress={() => goToAddExercisesScreen()}/>
        </View>
    )
}