import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body } from 'native-base';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions';

var { height } = Dimensions.get('window');

const Confirm = (props) => {
  const submit = props.route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Submit Order</Text>
      </View>
      {props.route.params ? (
        <View style={{ borderWidth: 1, borderColor: '#d00355' }}>
          <Text style={styles.shipping}>Shipping to:</Text>
          <View style={{ padding: 8, alignSelf: 'center' }}>
            <Text>Address: {submit.order.order.shippingAddress}</Text>
            <Text>Address 2: {submit.order.order.shippingAddress2}</Text>
            <Text>City: {submit.order.order.city}</Text>
            <Text>Zip code: {submit.order.order.zipCode}</Text>
            <Text>Country: {submit.order.order.country}</Text>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  shipping: {
    alignSelf: 'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Confirm;
