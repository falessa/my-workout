import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import PlanCard from './PlanCard/PlanCard';
import PlanCardsSeparator from './PlanCardsSeparator'
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '85%',
    }
})

const PlansList = ({ plans, navigation }) => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{t('plansTitle')}</Text>
            <FlatList
                data={plans}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <PlanCard planData={item} onPress={() => navigation.navigate('PlanDetailScreen', { planId: item.id } )}/> }
                ItemSeparatorComponent={PlanCardsSeparator}
            />
            <Button title={t('addPlan')} onPress={() => navigation.navigate('AddPlanName')}/>
        </View>
    )
}

export default PlansList;