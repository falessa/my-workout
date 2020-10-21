import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { addPlan, resetPlansToInitialState } from '../../redux/plans'
import NoPlans from '../../components/NoPlans'
import PlansList from '../../components/PlansList/PlansList';

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
            { 
              id: '2', 
              name: 'Plan October 2020',
              daysPerWeek:'2',
              planDetails: [
                  {
                      musclesZone: 'Femorales y gluteos',
                      day: 1,
                      exercises: [
                          {
                              name: 'Peso muerto piernas semiflexionadas',
                              sets: 4,
                              repetitions: 12,
                              kgs: 10
                          },
                          {
                              name: 'Peso muerto a 1 pierna + extension de cadera en cajon',
                              sets: 3,
                              repetitions: '12 + 15',
                              kgs: 10
                          }
                      ],
                  },
                  {
                      musclesZone: 'Tren superior',
                      day: 2,
                      exercises: [
                          {
                              name: 'Press plano + remo con mancuernas',
                              sets: 4,
                              repetitions: '12 + 12',
                              kgs: 6
                          },
                          {
                              name: 'Apertura inclinada + remo invertido TRX',
                              sets: 3,
                              repetitions: '12 + 8/12',
                              kgs: 10
                          }
                      ],
                  },
              ],
              creationDate: '24/08/2020'
          }
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
