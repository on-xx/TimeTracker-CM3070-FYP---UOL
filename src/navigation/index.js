import {Provider} from 'react-redux';
import store, {persistor} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigation from './MainNavigation';

export default function Routes() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}
