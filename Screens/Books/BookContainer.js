import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import BookList from './BookList';
import SearchedBooks from './SearchedBooks';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require('../../assets/data/books.json');
const bookCategories = require('../../assets/data/categories.json');

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  const [booksFiltered, setBooksFiltered] = useState([]);
  const [highlight, setHighlight] = useState();
  const [categories, setCategories] = useState([]);
  const [booksCtg, setBooksCtg] = useState([]);
  const [active, setActive] = useState();
  const [initState, setInitState] = useState([]);

  useEffect(() => {
    setBooks(data);
    setBooksFiltered(data);
    setHighlight(false);
    setCategories(bookCategories);
    setActive(-1);
    setInitState(data);

    return () => {
      setBooks([]);
      setBooksFiltered([]);
      setHighlight();
      setCategories([]);
      setActive();
      setInitState();
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

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg == 'all'
        ? [setBooksCtg(initState), setActive(true)]
        : [
            setBooksCtg(
              books.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
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
        <View>
          <View>
            <Banner />
          </View>
          <View>
            <CategoryFilter 
              categories={categories}
              CategoryFilter={changeCtg}
              booksCtg={booksCtg}
              active={active}
              setActive={setActive}
            />
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
