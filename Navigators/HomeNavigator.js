import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookContainer from '../Screens/Books/BookContainer';
import SingleBook from '../Screens/Books/SingleBook';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={BookContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Book Detail'
        component={SingleBook}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
