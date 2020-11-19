import React from 'react';
import { StyleSheet, View } from 'react-native';
// import TextInput from '../TextInput';
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
    // setDetailEmpty: {
    //     alignItems: 'stretch',
    //     justifyContent: 'center',
    //     flexDirection: 'row',
    //     width: 120
    // },
    setDetailInfo: {
        flexDirection: 'row',
        width: 120
    },
    textInput: {
        width: 10,
        padding: 20
    }
})

const SetDetail = ({ setDetail, onTrashPress, onChangeText }) => {
    const { t } = useTranslation()

    // const renderEmtpySetDetails = () => {
    //     return (
    //         <View style={styles.setDetailEmpty}>
    //             <TextInput keyboardType='number-pad' placeholder={t('enterSetsPlaceholder')} style={styles.textInput} onChangeText={onChangeText}/>
    //             <TextInput keyboardType='numeric' placeholder={t('enterRepetitionsPlaceholder')} style={styles.textInput} onChangeText={onChangeText}/>
    //             <TextInput keyboardType='numeric' placeholder={t('enterKgsPlaceholder')} style={styles.textInput} />
    //             <Ionicons name="md-checkmark" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("confirm set detail") } }/>
    //             <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={onTrashPress}/>
    //         </View>
    //     )
    // }

    const renderSetDetailInfo = (setDetail) => {
        return (
            <View style={styles.setDetailInfo}>
                <TextSecondary text={setDetail.sets + " sets"}/>
                <TextSecondary text={setDetail.repetitions + " reps"} style={styles.textInput}/>
                <TextSecondary text={setDetail.kgs + " kgs"} style={styles.textInput}/>
                <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("delete set detail") } }/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            { 
                // setDetail ? 
                renderSetDetailInfo(setDetail)
                // : renderEmtpySetDetails()
            }
        </View>
    )
}

export default SetDetail;