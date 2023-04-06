import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Item, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Form & Input
import FormContainer from '../../../Shared/Form/FormContainer';
import Input from '../../../Shared/Form/Input';

// Redux
import { connect } from 'react-redux';

const countries = require('../../../assets/countries.json');

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZipCode] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    return () => {
      setOrderItems();
    };
  }, []);

  const checkoutSubmit = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress: address,
      shippingAddress2: address2,
      zipCode,
    };

    props.navigation.navigate('Payment', { order: order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={'Shipping Address'}>
        <Input
          placeholder={'Phone'}
          name={'Phone'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={'Shipping Address 1'}
          name={'Shipping Address 1'}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={'Shipping Address 2'}
          name={'Shipping Address 2'}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={'City'}
          name={'City'}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={'Zip Code'}
          name={'Zip Code'}
          value={zipCode}
          keyboardType={'numeric'}
          onChangeText={(text) => setZipCode(text)}
        />
        <Item picker>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' color={'#007aff'} />}
            style={{ width: undefined }}
            selectedValue={country}
            placeholder='Select your country'
            placeholderStyle={{ color: '#007aff' }}
            placeholderIconColor='#007aff'
            onValueChange={(i) => setCountry(i)}
          >
            {countries.map((c) => {
              return <Picker.Item key={c.code} label={c.name} value={c.name} />;
            })}
          </Picker>
        </Item>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <Button title='Order' onPress={() => checkoutSubmit()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;

  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(Checkout);
