//Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './utils/style/globalStyle';
import App from './components/App';
import './i18n';
import './utils/style/fonts.css';
import './utils/style/animations.css';
import store from './utils/store';
import { Provider } from 'react-redux';

//Render
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <HashRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </HashRouter>
);
