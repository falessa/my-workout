import React from 'react';
import { StyleSheet, View } from 'react-native';
import Settings from '../../../utils/SettingsEnum'
import ListMenuOption from '../../../components/ListMenuOptionNavigatable/ListMenuOptionNavigatable';

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <ListMenuOption options={Object.values(Settings)} navigation={navigation}/>
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
