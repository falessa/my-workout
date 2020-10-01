import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App({ navigation }) {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Plans home screen!</Text>
      <Button title='Add plan' onPress={() => navigation.navigate('AddPlanName')}/>
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
