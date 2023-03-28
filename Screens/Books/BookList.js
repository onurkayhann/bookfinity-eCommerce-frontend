import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import BookCard from './BookCard';

var { width } = Dimensions.get('window');

/* - Within the TouchableOpacity tags you can touch 
     anywhere and reach different touch effects

   - Dimensions allow us to get the dimensions of the mobile screen, possibility to  
     calculate dynamically the style

   */

const BookList = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity style={{ width: '50%' }} onPress={() => 
      props.navigation.navigate('Book Details', {item: item})
    }>
      <View
        style={{
          width: width / 2,
          backgroundColor: 'gainsboro',
        }}
      >
        <BookCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default BookList;
