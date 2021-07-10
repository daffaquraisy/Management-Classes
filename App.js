import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import Loading from './screens/Loading';

const MainApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0059D0" barStyle="light-content" />
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
