/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  latam: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}> Welcome </Text>
    <Text style={styles.latam}> Latam Create App </Text>
  </View>
);

export default Main;
