import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import PlanCardsSeparator from '../PlanCardsSeparator'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '85%',
    }
})

const ExercisesList = ({ exercises }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={exercises}
                keyExtractor={x => String(x.name)}
                renderItem={({ item }) => <ExerciseCard exerciseData={item}/> }
                ItemSeparatorComponent={PlanCardsSeparator}
            />
        </View>
    )
}

export default ExercisesList;