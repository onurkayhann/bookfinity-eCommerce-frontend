import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import Header from './Shared/Header';
import BookContainer from './Screens/Books/BookContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <BookContainer />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
