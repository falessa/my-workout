import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    planCardOptions: {
        flex: 1, 
        flexDirection: 'row',
        // alignItems: 'flex-start'
    }
})

const PlanCard = ({ planData, navigation }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{planData.name}</Text>
            <Text>{planData.daysPerWeek} {t('daysWeek')}</Text>
            <Text>{t('createdAt')} {planData.creationDate}</Text>
            <View style={styles.planCardOptions}>
                {/* <TouchableOpacity>
                    <Text>View</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Delete</Text>
                </TouchableOpacity> */}
                <Button title='View' onPress={() => navigation.navigate('PlanDetailScreen', { planId: planData.id })}/>
                <Button title='Edit' onPress={() => navigation.navigate('AddExercisesScreen', { planId: planData.id })}/>
                <Button title='Delete'/>
            </View>
        </View>
        
    )
}

export default PlanCard;