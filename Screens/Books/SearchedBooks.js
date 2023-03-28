import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

var { width } = Dimensions.get('window');

const SearchedBooks = (props) => {
  const { booksFiltered } = props;

  return (
    <Content style={{ width: width }}>
      {booksFiltered.length > 0 ? (
        booksFiltered.map((item) => (
          <ListItem
            onPress={() => {
              props.navigation.navigate('Book Detail', { item: item });
            }}
            key={item._id.$oid}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : 'https://www.allbutessentialtravel.co.uk/wp-content/uploads/2015/03/ATMag.jpg',
                }}
              />
            </Left>

            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: 'center' }}>No product matched</Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchedBooks;
