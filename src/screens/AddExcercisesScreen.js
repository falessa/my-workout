import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createTemporalPlan } from '../redux/temporalPlan'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExercisesList from '../components/ExercisesList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    exercisesListContainer: {
        flex: 12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },
    buttonsContainer: {
        flex: 2
    } 
})

export default function App() {
    const temporalPlan = useSelector(store => store.temporalPlan)
    let exercises = new Array(temporalPlan.daysPerWeek)

    for (let i = 0; i < exercises.length; i++) {
        exercises[i] = { day: i + 1 }
    }

    console.log(exercises)

    const testData = [
            {
                name: 'Peso muerto piernas semiflexionadas',
                sets: 4,
                repetitions: 12,
                kgs: 10
            },
            {
                name: 'Peso muerto a 1 pierna + extension de cadera en cajon',
                sets: 3,
                repetitions: '12 + 15',
                kgs: 10
            },
            {
                name: 'Peso muerto piernas semiflexionadas',
                sets: 4,
                repetitions: 12,
                kgs: 10
            },
            {
                name: 'Peso muerto piernas semiflexionadas',
                sets: 4,
                repetitions: 12,
                kgs: 10
            },
            {
                name: 'Peso muerto piernas semiflexionadas',
                sets: 4,
                repetitions: 12,
                kgs: 10
            },
    ]

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <ScrollView>
                    <FlatList
                        horizontal={true}
                        data={exercises}
                        keyExtractor={x => String(x.day)}
                        renderItem={({ item }) => <Button title={'Day ' + item.day} onPress={() => console.log('clicked day:', item.day) }/> }
                    />
                </ScrollView>
            </KeyboardAwareScrollView>
            <View style={styles.exercisesListContainer}>
                <ExercisesList exercises={testData}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title='Add exercise' />
                <Button title='Save plan for all days' />
            </View>
        </View>
    )
}