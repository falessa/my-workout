import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExerciseDayButton from '../../../components/ExerciseDayButton'
import ExercisesList from '../../../components/ExercisesList/ExercisesList';
import { useTranslation } from 'react-i18next';

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

export default function App({ route }) {
    const { t } = useTranslation()
    const allPlans = useSelector(store => store.plans)
    const { planId } = route.params

    const plan = allPlans.filter(plan => plan.id === planId)[0]
    const planDetails = plan.planDetails

    // useState!! 
    const filterExercisesByDay = (daySelected) => {
        const filteredExercises = planDetails.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
        return filteredExercises
    }

    const showDayPlanForSelectedDay = (daySelected) => {
        const filterExercises = filterExercisesByDay(daySelected)
        setDaySelected(daySelected)
        setCurrentPlanForSelectedDay(filterExercises)
    }

    const [daySelected, setDaySelected] = useState(1);
    const [currentPlanForSelectedDay, setCurrentPlanForSelectedDay] = useState(filterExercisesByDay(1))

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <ScrollView>
                    <FlatList
                        horizontal={true}
                        data={planDetails}
                        keyExtractor={x => String(x.day)}
                        renderItem={({ item }) => <ExerciseDayButton text={t('day') + " " + item.day} onPress={() => showDayPlanForSelectedDay(item.day) }/> }
                    />
                </ScrollView>
            </KeyboardAwareScrollView>
            <Text>{t('youAreSeeingDay')} {daySelected}</Text>
            <View style={styles.exercisesListContainer}>
                <ExercisesList exercises={currentPlanForSelectedDay}/>
            </View>
        </View>
    )
}