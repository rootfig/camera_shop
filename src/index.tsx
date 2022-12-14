import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { store } from './store';
import { setItemsInBasket } from './store/basket-slice/basket-slice';
import { Camera } from './types/camera';
import 'react-toastify/dist/ReactToastify.css';
const storage = localStorage.getItem('orders') as string;
const orders = JSON.parse(storage) as {camera: Camera; count: number}[];
if (orders === null) {
  store.dispatch(setItemsInBasket([]));

}else {
  store.dispatch(setItemsInBasket(orders));
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>

    <Provider store={store} >
      <HistoryRouter history={ browserHistory }>
        <ToastContainer />
        <App />
      </ HistoryRouter>
    </Provider>

  </React.StrictMode>,
);
