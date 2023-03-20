import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

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
      <View style={{marginTop: 100}}>
        <FlatList
          horizontal
          data={books}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default BookContainer;
