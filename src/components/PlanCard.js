import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 10,
    }
})

const PlanCard = ({ planData, onPress }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text>{planData.name}</Text>
                <Text>{planData.daysPerWeek} {t('daysWeek')}</Text>
                <Text>{t('createdAt')} {planData.creationDate}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default PlanCard;