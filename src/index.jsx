import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //creates link to store
    <Provider store = {store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
);
