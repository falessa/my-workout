import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './src'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function () {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
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
