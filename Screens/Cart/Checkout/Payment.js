import React, { useState } from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  Body,
  Title,
} from 'native-base';

// Payment method
const paymentMethods = [
  { name: 'Cash on Delivery', value: 1 },
  { name: 'Bank Transfer', value: 2 },
  { name: 'Card Payment', value: 3 },
];

// Payment method cards
const paymentCards = [
  { name: 'Wallet', value: 1 },
  { name: 'Visa', value: 2 },
  { name: 'MasterCard', value: 3 },
  { name: 'Other', value: 4 },
];

const Payment = (props) => {
  const [selectedMethod, setSelectedMethod] = useState();
  const [card, setCard] = useState();

  const order = props.route.params;

  return (
    <Container>
      <Header>
        <Body>
          <Title>Choose payment method</Title>
        </Body>
      </Header>
      <Content>
        {paymentMethods.map((item, i) => {
          return (
            <ListItem
              key={item.name}
              onPress={() => setSelectedMethod(item.value)}
            >
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
                <Radio selected={selectedMethod == item.value} />
              </Right>
            </ListItem>
          );
        })}
        {selectedMethod == 3 ? (
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            headerStyle={{ backgroundColor: '#d00355' }}
            headerBackButtonTextStyle={{ color: '#fff' }}
            headerTitleStyle={{ color: '#fff' }}
            selectedValue={card}
            onValueChange={(value) => setCard(value)}
          >
            {paymentCards.map((c, i) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null}
        <View style={{ marginTop: 60, alignSelf: 'center' }}>
          <Button
            title={'Submit'}
            onPress={() => props.navigation.navigate('Confirm', { order })}
          />
        </View>
      </Content>
    </Container>
  );
};

export default Payment;
