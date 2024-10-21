import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ExerciseDayButton from '../../../components/ExerciseDayButton'
import ExercisesList from '../../../components/ExercisesList/ExercisesList';
import NoExercises from '../../../components/NoExercises/NoExercises';
import MainButton from '../../../components/MainButton'
import { addPlan } from '../../../storeManagement/plansSlice'
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
        flex: 5
    },
})

export default function App({ navigation }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const temporalPlan = useSelector(store => store.temporalPlan)

    const filterExercisesByDay = (daySelected) => {
        const filteredExercises = temporalPlan.planDetails.filter(planDays => planDays.day === daySelected).map(planForDay => planForDay.exercises)[0]
        return filteredExercises
    }

    const [daySelected, setDaySelected] = useState(1);
    const [currentPlanForSelectedDay, setCurrentPlanForSelectedDay] = useState(filterExercisesByDay(1))
    
    useEffect(() => {
        setCurrentPlanForSelectedDay(filterExercisesByDay(daySelected));
    }, [temporalPlan]);

    const showDayPlanForSelectedDay = (daySelected) => {
        const filterExercises = filterExercisesByDay(daySelected)
        setDaySelected(daySelected)
        setCurrentPlanForSelectedDay(filterExercises)
    }

    const showPlanDetails = () => {
        return (
            <>
                <View style={styles.exercisesListContainer}>
                    <ExercisesList exercises={currentPlanForSelectedDay}/>
                </View>
            </>
        )
    }

    const savePlan = () => {
        navigation.navigate('PlansHomeBottom', { plan: {} })
        dispatch(addPlan(temporalPlan))
    }

    return (
        <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <ScrollView>
                        <FlatList
                            horizontal={true}
                            data={temporalPlan.planDetails}
                            keyExtractor={x => String(x.day)}
                            renderItem={({ item }) => <ExerciseDayButton text={t('day') + " " + item.day} onPress={() => showDayPlanForSelectedDay(item.day)} selected={daySelected === item.day} /> }
                        />
                    </ScrollView>
                </KeyboardAwareScrollView>
            {currentPlanForSelectedDay.length > 0
                ? showPlanDetails()
                : <NoExercises day={daySelected}/>
            }
            <View style={styles.buttonsContainer}>
                <MainButton text={t('addExercise')} onPress={() => navigation.navigate('AddExerciseDetail', { day: daySelected })}/>
                <MainButton text={t('savePlanForAllDays')} onPress={() => savePlan()} />
            </View>
        </View>
    )
}