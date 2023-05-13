import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { RootNavigator } from './navigation';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Suspense fallback={<ActivityIndicator />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  </Suspense>
);

// allow reactotron overlay for fast design in dev mode
export default App;
