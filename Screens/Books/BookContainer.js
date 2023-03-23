import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import BookList from './BookList';

const data = require('../../assets/data/books.json');

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  const [booksFiltered, setBooksFiltered] = useState([]);

  useEffect(() => {
    setBooks(data);
    setBooksFiltered(data);

    return () => {
      setBooks([]);
    };
  }, []);

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search'
            // onFocus={}
            // onChangeText={(text) => }
          />
        </Item>
      </Header>
      <View style={styles.container}>
        <Text>Book Container</Text>
        <View style={styles.listContainer}>
          <FlatList
            numColumns={2}
            data={books}
            renderItem={({ item }) => <BookList key={item.id} item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  listContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookContainer;
