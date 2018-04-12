import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from 'routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'index.css';
import { MuiThemeProvider } from 'material-ui/styles';

const store = configureStore();

const App = (
    <Provider store={store}>
        <MuiThemeProvider>
            <AppRouter/>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
