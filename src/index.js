import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from 'routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'index.css';

const store = configureStore();

const App = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
