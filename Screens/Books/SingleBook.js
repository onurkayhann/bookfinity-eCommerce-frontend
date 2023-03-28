import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import { Left, Right, Container, H1 } from 'native-base';

const SingleBook = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [available, setAvailable] = useState(null);

  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allbutessentialtravel.co.uk%2Fportfolio%2Fwriting%2Fatmag%2F&psig=AOvVaw2n_9dt5wNQHoUJFmG8a2iI&ust=1679479060884000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNDwxpvh7P0CFQAAAAAdAAAAABAD',
            }}
            resizeMode='contain'
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/* TODO: Description, Rich Description, and available */}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>${item.price}</Text>
        </Left>
        <Right>
          <Button title='Add' />
        </Right>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentHeader: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: '#d00355',
  },
});

export default SingleBook;
