import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import Error from '../../Shared/Error';

import baseURL from '../../assets/common/baseURL';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const user = {
      email,
      password,
    };

    if (email === '' || password === '') {
      setError('Please fill in your credentials');
    } else {
      try {
        const response = await fetch(`${baseURL}users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data); // do something with the user data
          props.navigation.navigate('User Profile');
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.log(err);
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <FormContainer title={'Login'}>
      <Input
        placeholder={'Enter email'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Enter password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonStyle}>
        {error ? <Error message={error} /> : null}
        <Button title='Login' onPress={() => handleSubmit()} />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonStyle]}>
        <Text style={styles.middleText}>Don't have an account already?</Text>
        <Button
          title='Register'
          onPress={() => props.navigation.navigate('Register')}
        />
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '80%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default Login;
