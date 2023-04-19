import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Container } from 'native-base';

const UserProfile = () => {
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{ fontSize: 30 }}>Dear Biketrace customer!</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ margin: 10 }}>Email: Your email here</Text>
          <Text style={{ margin: 10 }}>Phone: your phone here</Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button title={'Sign Out'} />
        </View>
      </ScrollView>
    </Container>
  );
};

// Render name, email and phone dynamically

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});

export default UserProfile;
