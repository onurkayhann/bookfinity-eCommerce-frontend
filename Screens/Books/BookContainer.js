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
    <View>
      <Text>Book Container</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          numColumns={2}
          horizontal
          data={books}
          renderItem={({ item }) => <BookList key={item.id} item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default BookContainer;
