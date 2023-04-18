import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Navigators
import Main from './Navigators/Main';

// Ignore console messages on the device
LogBox.ignoreAllLogs(true);

// Screens
import Header from './Shared/Header';
import BookContainer from './Screens/Books/BookContainer';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <StatusBar style='auto' />
      </NavigationContainer>
    </Provider>
  );
}
