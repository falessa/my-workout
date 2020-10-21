import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExercisesList from '../../../components/ExercisesList';
import NoExercises from '../../../components/NoExercises';
import { addPlan, updatePlan } from '../../../redux/plans'
import { createTemporalPlan, createTemporalPlanWithId } from '../../../redux/temporalPlan'
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

export default function App({ navigation, route }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { planId } = route.params
    const isPlanUpdate = planId ? true : false
    let temporalPlan=''

    if (planId) {
        console.log('PLAN ID IS ', planId)
        const allPlans = useSelector(store => store.plans)
        temporalPlan = allPlans.filter(plan => plan.id === planId)[0]
        dispatch(createTemporalPlanWithId({name: temporalPlan.name, id: temporalPlan.id, daysPerWeek: temporalPlan.daysPerWeek, planDetails: temporalPlan.planDetails }))
    } else {
        console.log('NO PLAN ID PROVIDED, A NEW ONE IS BEING CREATED')
        temporalPlan = useSelector(store => store.temporalPlan)
        console.log(temporalPlan)
    }
    
    // useState!! 
    const filterExercisesByDay = (daySelected) => {
        const filteredExercises = temporalPlan.planDetails.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
        return filteredExercises
    }

    const [daySelected, setDaySelected] = useState(1);
    const [currentPlanForSelectedDay, setCurrentPlanForSelectedDay] = useState(filterExercisesByDay(1))


    const showDayPlanForSelectedDay = (daySelected) => {
        const filterExercises = filterExercisesByDay(daySelected)
        setDaySelected(daySelected)
        setCurrentPlanForSelectedDay(filterExercises)
    }

    const showPlanDetails = () => {
        return (
            <>
                <Text>{t('youAreSeeingDay')} {daySelected}</Text>
                <View style={styles.exercisesListContainer}>
                    <ExercisesList exercises={currentPlanForSelectedDay}/>
                </View>
            </>
        )
    }

    const savePlan = () => {
        // navigation.navigate('PlansHomeBottom', { plan: {} })
        console.log("SAVING PLAN AFTER PRESSING SAVE PLAN FOR ALL DAYS")
        console.log(temporalPlan)
        console.log('PLAN UPDATE', isPlanUpdate)
        if (!isPlanUpdate) {
            dispatch(addPlan(temporalPlan))
        } else {
            dispatch(addPlan(temporalPlan))
        }
        navigation.navigate('PlansHomeBottom')
    }

    return (
        <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <ScrollView>
                        <FlatList
                            horizontal={true}
                            data={temporalPlan.planDetails}
                            keyExtractor={x => String(x.day)}
                            renderItem={({ item }) => <Button title={t('day') + " " + item.day} onPress={() => showDayPlanForSelectedDay(item.day) }/> }
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            {currentPlanForSelectedDay.length > 0
                ? showPlanDetails()
                : <NoExercises day={daySelected}/>
            }
            <View style={styles.buttonsContainer}>
                <Button title={t('addExercise')} onPress={() => navigation.navigate('AddExerciseDetail', { day: daySelected })} />
                <Button title={t('savePlanForAllDays')} onPress={() => savePlan()}/>
            </View>
        </View>
    )
}