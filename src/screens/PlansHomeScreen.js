import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { addPlan, resetPlansToInitialState } from '../redux/plans'
import NoPlans from '../components/NoPlans';
import PlansList from '../components/PlansList';

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const plans = useSelector(store => store.plans)
  console.log(plans)

  return (
    <View style={styles.container}>
      {plans.length > 0
        ? <PlansList plans={plans} navigation={navigation}/>
        : <NoPlans onPress={() => navigation.navigate('AddPlanName')}/>
      }

      {/* <Text>Plans screen works with redux!!!</Text>
      <Button title="Add plan" onPress={() => dispatch(addPlan(
        { id: '2', name: 'Plan October 2020', frequency:'3 days/week', exercises: 'this should be an array', creationDate: '24/09/2020'}
        ))}
      />
      <Button title="Reset store" onPress={() => dispatch(resetPlansToInitialState())}/> */}

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
