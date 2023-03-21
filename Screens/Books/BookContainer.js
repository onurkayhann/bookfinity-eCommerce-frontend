import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import BookList from './BookList';

const data = require('../../assets/data/books.json');

const BookContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(data);

    return () => {
      setBooks([]);
    };
  }, []);

  return (
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
