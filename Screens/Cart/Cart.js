import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Text,
  Left,
  Right,
  H1,
  ListItem,
  Thumbnail,
  Body,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

// Dimensions
var { height, width } = Dimensions.get('window');

const Cart = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{ alignSelf: 'center' }}>Cart</H1>
          {props.cartItems.map((data) => {
            return (
              <ListItem style={styles.listItem} key={Math.random()} avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri: data.book.image
                        ? data.book.image
                        : 'https://www.allbutessentialtravel.co.uk/wp-content/uploads/2015/03/ATMag.jpg',
                    }}
                  />
                </Left>
                <Body style={styles.body}>
                  <Left>
                    <Text>{data.book.name}</Text>
                  </Left>
                  <Right>
                    <Text>$ {data.book.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            );
          })}
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Your cart is empty, continue shopping!</Text>
          <Text>Add something to your cart</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default connect(mapStateToProps, null)(Cart);
