import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createTemporalPlan } from '../redux/temporalPlan'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExercisesList from '../components/ExercisesList';
import NoExercises from '../components/NoExercises';

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
    },
})

export default function App() {
    const temporalPlan = useSelector(store => store.temporalPlan)
    let planDetails = new Array(temporalPlan.daysPerWeek)

    for (let i = 0; i < planDetails.length; i++) {
        planDetails[i] = { day: i + 1 }
    }

    console.log(temporalPlan)
    console.log('****')
    console.log(planDetails)

    console.log('WATCH THIS:')
    const newTemporal = {...temporalPlan, planDetails}
    console.log(newTemporal)

    const testData2 = [
        {
            musclesZone: 'Femorales y gluteos',
            day: 1,
            exercises: [
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
                }
            ],
        },
        {
            musclesZone: 'Tren superior',
            day: 2,
            exercises: [
                {
                    name: 'Press plano + remo con mancuernas',
                    sets: 4,
                    repetitions: '12 + 12',
                    kgs: 6
                },
                {
                    name: 'Apertura inclinada + remo invertido TRX',
                    sets: 3,
                    repetitions: '12 + 8/12',
                    kgs: 10
                }
            ],
        },
    ]

    // useState!! 
    const filterExercisesByDay = (daySelected) => {
        const filteredExercises = testData2.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
        return filteredExercises
    }

    const [daySelected, setDaySelected] = useState(1);
    const [currentPlanForSelectedDay, setCurrentPlanForSelectedDay] = useState(filterExercisesByDay(1))


    const showDayPlanForSelectedDay = (daySelected) => {
        console.log('PLAN FOR SELECTED DAY: ', daySelected)
        const filterExercises = filterExercisesByDay(daySelected)
        console.log(filterExercises)
        setDaySelected(daySelected)
        setCurrentPlanForSelectedDay(filterExercises)
    }

    const showPlanDetails = () => {
        return (
            <>
                <Text>You're seeing Day {daySelected}</Text>
                <View style={styles.exercisesListContainer}>
                    <ExercisesList exercises={currentPlanForSelectedDay}/>
                </View>
            </>
        )
    }
    return (
        <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <ScrollView>
                        <FlatList
                            horizontal={true}
                            data={planDetails}
                            keyExtractor={x => String(x.day)}
                            renderItem={({ item }) => <Button title={'Day ' + item.day} onPress={() => showDayPlanForSelectedDay(item.day) }/> }
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            {planDetails
                ? showPlanDetails()
                : <NoExercises day={daySelected}/> 
            }
            <View style={styles.buttonsContainer}>
                <Button title='Add exercise' />
                <Button title='Save plan for all days'/>
            </View>
        </View>
    )
}