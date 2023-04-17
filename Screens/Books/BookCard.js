import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
} from 'react-native';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

var { width } = Dimensions.get('window');

const BookCard = (props) => {
  const { name, author, price, image, description, countInStock } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{
          uri: image
            ? image
            : 'https://www.allbutessentialtravel.co.uk/wp-content/uploads/2015/03/ATMag.jpg',
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button
            title={'Add'}
            color={'#d00355'}
            onPress={() => props.addItemToCart(props)}
          />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currently out of stock</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (book) => dispatch(actions.addToCart({ quantity: 1, book })),
  };
};

/* 
   - Change button later
   - Change the colors appropriate for BikeTrace
   - THIS IS JUST TO GET STARTED
*/

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginTop: 10,
  },
});

export default connect(null, mapDispatchToProps)(BookCard);
