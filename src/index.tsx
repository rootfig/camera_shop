import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { store } from './store';
import { fetchCamerasAction, fetchPromoAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchCamerasAction());
store.dispatch(fetchPromoAction());


root.render(
  <React.StrictMode>

    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
);
