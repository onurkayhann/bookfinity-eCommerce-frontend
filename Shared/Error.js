import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
  errorMessage: {
    color: '#c0392b',
  },
});

export default Error;
