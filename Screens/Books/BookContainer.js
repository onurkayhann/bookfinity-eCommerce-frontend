import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import BookList from './BookList';
import SearchedBooks from './SearchedBooks';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

var { height } = Dimensions.get('window');

const data = require('../../assets/data/books.json');
const bookCategories = require('../../assets/data/categories.json');

const BookContainer = (props) => {
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
    setBooksCtg(data);
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
        <SearchedBooks
          booksFiltered={booksFiltered}
          navigation={props.navigation}
        />
      ) : (
        <ScrollView>
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
            {booksCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {booksCtg.map((item) => {
                  return (
                    <BookList
                      navigation={props.navigation}
                      key={item._id.$oid}
                      item={item}
                    />
                  );
                })}
              </View>
            ) : (
              <View style={[styles.center, { height: height / 2 }]}>
                <Text>No products found</Text>
              </View>
            )}
          </View>
        </ScrollView>
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
    height: height,
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
