import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { addPlan, resetPlansToInitialState } from '../redux/plans'
import NoPlans from '../components/NoPlans';

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const plans = useSelector(store => store.plans)
  console.log(plans)

  return (
    <View style={styles.container}>
      {/* {plans.length > 0
        ? <Text>There are plans! YAY!</Text>
        : <NoPlans onPress={() => navigation.navigate('AddPlanName')}/>
      } */}

      <Text>Plans screen works with redux!!!</Text>
      <Button title="Add plan" onPress={() => dispatch(addPlan(
        { id: '2', name: 'Plan October 2020', exercises: 'this should be an array'}
        ))}
      />
      <Button title="Reset store" onPress={() => dispatch(resetPlansToInitialState())}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
