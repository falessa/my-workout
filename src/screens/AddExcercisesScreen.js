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
        alignItems: 'center',
        justifyContent: 'center',
    },
    exercisesListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 90
    } 
})

export default function App() {
    const temporalPlan = useSelector(store => store.temporalPlan)
    let exercises = new Array(temporalPlan.daysPerWeek)

    for (let i = 0; i < exercises.length; i++) {
        exercises[i] = { day: i + 1 }
    }

    console.log(exercises)

    const renderDay1 = () => {
        return (
            <View>
                <Text>Day 1</Text>
            </View>
        )
    }

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
                        renderItem={({ item }) => <Button title={'Day ' + item.day}/> }
                    />
                </ScrollView>
                <ExercisesList  style={styles.exercisesListContainer} exercises={testData}/>
            </KeyboardAwareScrollView>
        </View>
    )
}