import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    setDetailInfo: {
        flexDirection: 'row',
        width: 120
    },
    textInput: {
        width: 10,
        padding: 20
    }
})

const SetDetail = ({ setDetail }) => {
    const { t } = useTranslation()

    const renderSetDetailInfo = (setDetail) => {
        return (
            <View style={styles.setDetailInfo}>
                <TextSecondary text={setDetail.sets + " " + t('sets')}/>
                <TextSecondary text={setDetail.repetitions + " " + t('repetitions')} style={styles.textInput}/>
                <TextSecondary text={setDetail.kgs + " " + t('kgs')} style={styles.textInput}/>
                <Ionicons name="md-trash" size={26} color="black" style={{padding: 7}} onPress={()=> { console.log("delete set detail") } }/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            { 
                renderSetDetailInfo(setDetail)
            }
        </View>
    )
}

export default SetDetail;