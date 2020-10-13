import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createTemporalPlan, updateTemporalPlan } from '../redux/temporalPlan'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExercisesList from '../components/ExercisesList';
import NoExercises from '../components/NoExercises';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

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

export default function App({ navigation, route }) {
    const dispatch = useDispatch();

    const temporalPlan = useSelector(store => store.temporalPlan)
    console.log('TEMPORAL PLAN IS: ')
    console.log(temporalPlan)

    // useState!! 
    const filterExercisesByDay = (daySelected) => {
        console.log('FILTERING EXERCISES BY DAY')
        const filteredExercises = temporalPlan.planDetails.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
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
                            data={temporalPlan.planDetails}
                            keyExtractor={x => String(x.day)}
                            renderItem={({ item }) => <Button title={'Day ' + item.day} onPress={() => showDayPlanForSelectedDay(item.day) }/> }
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            {temporalPlan.planDetails.exercises || route.params?.exercises
                ? showPlanDetails()
                : <NoExercises day={daySelected}/>
            }
            <View style={styles.buttonsContainer}>
                <Button title='Add exercise' onPress={() => navigation.navigate('AddExerciseDetail', { day: daySelected })} />
                <Button title='Save plan for all days'/>
            </View>
        </View>
    )
}