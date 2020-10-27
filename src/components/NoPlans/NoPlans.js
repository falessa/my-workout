import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainButton from '../MainButton';
import TextPrimary from '../Text/TextPrimary/TextPrimary';
import TextSecondary from '../Text/TextSecondary/TextSecondary'
import WorkoutImage from '../../../assets/svg/personal_training';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const NoPlans = ({ onPress }) => {
    const { t } = useTranslation()

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <WorkoutImage width={320} height={250}/>
            </View>
            <TextPrimary text={t('welcome')}/>
            <TextSecondary text={t('noPlans')} />
            <MainButton onPress={onPress} text={t('addPlan')}/>

        </View>
        
    )
}

export default NoPlans