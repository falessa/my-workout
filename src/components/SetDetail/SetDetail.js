import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextInput from '../TextInput';
import TextSecondary from '../Text/TextSecondary/TextSecondary';

import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 120
    },
    textInput: {
        width: 10,
        padding: 20
    }
})

const SetDetail = ({ isConfirmationNeeded, setDetail }) => {
    const { t } = useTranslation()

    const renderEmtpySetDetails = () => {
        return (
            <>
                <TextInput keyboardType='number-pad' placeholder={t('enterSetsPlaceholder')} style={styles.textInput}/>
                <TextInput keyboardType='numeric' placeholder={t('enterRepetitionsPlaceholder')} style={styles.textInput}/>
                <TextInput keyboardType='numeric' placeholder={t('enterKgsPlaceholder')} style={styles.textInput}/>
                <Ionicons name="md-checkmark" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("confirm set detail") } }/>
                <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("delete set detail") } }/>
            </>
        )
    }

    const renderSetDetailInfo = (setDetail) => {
        return (
            <>
                <TextSecondary text={setDetail.sets + " sets"}/>
                <TextSecondary text={setDetail.repetitions + " reps"} />
                <TextSecondary text={setDetail.kgs + " kgs"}/>
                <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("delete set detail") } }/>
            </>
        )
    }

    return (
        <View style={styles.container}>
            { setDetail ? 
                renderSetDetailInfo(setDetail)
                : renderEmtpySetDetails()
            }
            {/* { isConfirmationNeeded &&
                
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="md-checkmark" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("confirm set detail") } }/>
                    <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("delete set detail") } }/>
                </View>
            } */}

        </View>
    )
}

export default SetDetail;