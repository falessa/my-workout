import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { StyleSheet, View } from 'react-native';
import MainButton from '../../../components/MainButton'
import TextInput from '../../../components/TextInput'
import TextSecondary from '../../../components/Text/TextSecondary/TextSecondary'
import { createTemporalPlan } from '../../../redux/temporalPlan'
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
        navigation.navigate('AddExercisesScreen')
    }
    
    return (
        <View style={styles.container}>
            <TextSecondary text={t('choosePlanName') + ":"}/>
            <TextInput onChangeText={planName => setName(planName)} placeholder={t('enterPlanNamePlaceholder')}/>
            <TextSecondary text={t('enterDaysPerWeek') + ":"}/>
            <TextInput onChangeText={daysPerWeek => setDaysPerWeek(parseInt(daysPerWeek))} placeholder={t('daysPerWeekPlaceholder')}/>
            <MainButton onPress={() => goToAddExercisesScreen()} text={t('continueToAddExercises')}/>
        </View>
    )
}