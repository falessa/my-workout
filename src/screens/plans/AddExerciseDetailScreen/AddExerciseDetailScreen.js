import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addExerciseToDayPlan } from '../../../storeManagement/temporalPlanSlice';
import { StyleSheet, View, FlatList } from 'react-native';
import MainButton from '../../../components/MainButton'
import TextInput from '../../../components/TextInput'
import TextSecondary from '../../../components/Text/TextSecondary/TextSecondary'
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import * as Crypto from 'expo-crypto';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: '50%',
    },
    setDetailEmpty: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 120,
    },
    setDetailInfo: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: 230,
    },
})

export default function App({ route, navigation }) {
    const { t } = useTranslation()
    const { day } = route.params
    const dispatch = useDispatch()
    const temporalPlan = useSelector(store => store.temporalPlan)

    const [setDetails, setSetDetailsArray] = useState(new Array())
    const [showSetDetailComp, setShowDetailComp] = useState(false)

    const [name, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [repetitions, setReps] = useState('')
    const [kgs, setKgs] = useState('')

    const addExerciseToPlan = () => {
        dispatch(addExerciseToDayPlan({ name, setDetails, day }))
        navigation.navigate('AddExercisesScreen', { exercises:[{ name, sets, repetitions, kgs, day }]})
    }

    const renderSetDetailComponent = () => {
        setShowDetailComp(true);
    }

    const confirmSetDetail = () => {
        setDetails.push({ id: Crypto.randomUUID(), sets, repetitions, kgs })
        hideSetDetailComponent();
    }

    const deleteSetDetail = (itemId) => {
        const filteredSetDetails = setDetails.filter(item => item.id != itemId)
        setSetDetailsArray(filteredSetDetails)
    }

    const hideSetDetailComponent = () => {
        setShowDetailComp(false);
    }

    const renderConfirmedSetDetails = (setDetails) => {
        return (
            <>
                <FlatList
                    data={setDetails}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <View style={styles.setDetailInfo}>
                            <TextSecondary text={item.sets + " " + t('sets')}/>
                            <TextSecondary text={item.repetitions + " " + t('repetitions')} style={styles.textInput}/>
                            <TextSecondary text={item.kgs + " " + t('kgs')} style={styles.textInput}/>
                            <Ionicons name="trash-bin" size={26} color="black" style={{padding: 7}} onPress={() => { deleteSetDetail(item.id) }}/>
                        </View>
                    }
                />
            </>
        )
    }

    return (
        <View style={styles.container}>
            <TextSecondary text={t('enterExerciseName') + ":"}/>
            <TextInput onChangeText={name => setExerciseName(name)} placeholder={t('enterExerciseNamePlaceholder')}/>

            <View style={{ flexDirection: 'row' }}>
                <TextSecondary text={t('enterSetDetails')}/>
                <Ionicons name="add-circle" size={26} color="black" style={{padding: 7}} onPress={()=> { renderSetDetailComponent() } }/>
            </View>

            { showSetDetailComp &&
                <View style={styles.setDetailEmpty}>
                    <TextInput keyboardType='number-pad' placeholder={t('sets')} onChangeText={sets => setSets(sets)}/>
                    <TextInput keyboardType='numeric' placeholder={t('repetitions')} onChangeText={repetitions => setReps(repetitions)}/>
                    <TextInput keyboardType='numeric' placeholder={t('kgs')} onChangeText={kgs => setKgs(kgs)} />
                    <Ionicons name="checkmark-circle" size={26} color="black" style={{padding: 7}} onPress={confirmSetDetail}/>
                    <Ionicons name="trash-bin" size={26} color="black" style={{padding: 7}} onPress={hideSetDetailComponent}/>
                </View>
            }

            { setDetails.length > 0 &&
                    renderConfirmedSetDetails(setDetails)
            }

            <MainButton text={t('addExerciseToDay') + " " + day} onPress={() => addExerciseToPlan()}/>
        </View>
    )
}