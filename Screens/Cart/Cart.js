import React from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';

const Cart = (props) => {
  return (
    <View>
      {props.cartItems.map((i) => {
        return <Text>{i.book.name}</Text>;
      })}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);
