import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMenuOptionSelectable from '../../../components/ListMenuOptionSelectable/ListMenuOptionSelectable';
import Languages from '../../../utils/LanguagesEnum'

export default function App() {
    return (
        <View style={styles.container}>
            <ListMenuOptionSelectable options={Object.values(Languages)}/>
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
