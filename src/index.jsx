import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import App from './App';
import ScrollToTop from './component/ScrollTop';
import persistor from './utils/persistor';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
