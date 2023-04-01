import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../Screens/Cart/Cart';
// import Checkout

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <MyStack />;
}
