import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import BookList from './BookList';
import SearchedBooks from './SearchedBooks';
import Banner from '../../Shared/Banner';

const data = require('../../assets/data/books.json');
const categories = require('../../assets/data/categories.json');

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  const [booksFiltered, setBooksFiltered] = useState([]);
  const [highlight, setHighlight] = useState();

  useEffect(() => {
    setBooks(data);
    setBooksFiltered(data);
    setHighlight(false);

    return () => {
      setBooks([]);
      setBooksFiltered([]);
      setHighlight();
    };
  }, []);

  // Methods for books
  const searchBook = (text) => {
    setBooksFiltered(
      books.filter((index) =>
        index.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setHighlight(true);
  };

  const onBlur = () => {
    setHighlight(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Search for products'
            onFocus={openList}
            onChangeText={(text) => searchBook(text)}
          />
          {highlight == true ? (
            <Icon onPress={onBlur} name='ios-close' />
          ) : null}
        </Item>
      </Header>

      {highlight == true ? (
        <SearchedBooks booksFiltered={booksFiltered} />
      ) : (
        <View style={styles.container}>
          <View>
            <Banner />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              numColumns={2}
              data={books}
              renderItem={({ item }) => <BookList key={item.id} item={item} />}
              keyExtractor={(item) => item.brand}
            />
          </View>
        </View>
      )}
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
