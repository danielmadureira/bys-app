import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes/routes';
import { store, persistor } from './src/store';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Radley_400Regular': require('./assets/fonts/Radley/Radley-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}