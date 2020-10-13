import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { createTemporalPlan, deletePlan } from '../redux/temporalPlan'

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
//onPress={() => dispatch(createTemporalPlan( {name: planName, daysPerWeek: daysPerWeek}))}
export default function App({ navigation }) {
    const [planName, setName] = useState('')
    const [daysPerWeek, setDaysPerWeek] = useState('')
    let dispatch = useDispatch();

    const createEmptyPlanDetails = (daysPerWeek) => {
        // add plan details array to the temporal plan
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
            <TextInput style={styles.input} onChangeText={planName => setName(planName)} placeholder='Enter the plan name'/>
            <TextInput style={styles.input} onChangeText={daysPerWeek => setDaysPerWeek(parseInt(daysPerWeek))} placeholder='Days per week'/>
            <Button title='Continue to add exercises'  onPress={() => goToAddExercisesScreen()}/>
        </View>
    )
}