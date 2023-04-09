import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body } from 'native-base';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions';

var { height, width } = Dimensions.get('window');

const Confirm = (props) => {
  const submitOrder = () => {
    
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate('Cart')
    }, 500)
  }
  const submit = props.route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Submit Order</Text>
      </View>
      {props.route.params ? (
        <View style={{ borderWidth: 1, borderColor: '#d00355' }}>
          <Text style={styles.shipping}>Shipping to:</Text>
          <View style={{ padding: 8 }}>
            <Text>Address: {submit.order.order.shippingAddress}</Text>
            <Text>Address 2: {submit.order.order.shippingAddress2}</Text>
            <Text>City: {submit.order.order.city}</Text>
            <Text>Zip code: {submit.order.order.zipCode}</Text>
            <Text>Country: {submit.order.order.country}</Text>
          </View>
          <Text style={styles.shipping}>Items:</Text>
          {submit.order.order.orderItems.map((i) => {
            return (
              <ListItem
              key={i.book.name}
              style={styles.orderedItems}
              avatar
              >
                <Left>
                  <Thumbnail source= {{uri: i.book.image}} />
                </Left>
                <Body style={styles.body}>
                <Left>
                  <Text>{i.book.name}</Text>
                </Left>
                <Right>
                  <Text>${i.book.price}</Text>
                </Right>
                </Body>
              </ListItem>
            )
          })}
        </View>
      ) : null}
      <View style={{alignItems: 'center', margin: 20}}>
        <Button title={'Submit order'} onPress={submitOrder} />
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  }
}

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
  orderedItems: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width / 1.2
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default connect(null, mapDispatchToProps)(Confirm);
