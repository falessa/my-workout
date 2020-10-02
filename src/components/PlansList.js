import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import PlanCard from './PlanCard';
import PlanCardsSeparator from './PlanCardsSeparator'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const PlansList = ({ plans, navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is the plans list component</Text>
            <FlatList
                data={plans}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <PlanCard planData={item}/> }
                ItemSeparatorComponent={PlanCardsSeparator}
            />
            <Button title='Add plan' onPress={() => navigation.navigate('AddPlanName')}/>
        </View>
    )
}

export default PlansList;