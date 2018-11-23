import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { firebase } from './firebase/firebase';
import configStore from './store/config-store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../public/images/bgnew.jpeg';
import '../public/images/favicon.png';
import '../public/images/loader.gif';

import InputBox from './components/InputBox';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <InputBox />
    </Provider>
);

ReactDOM.render(jsx, document.querySelector('#root'));
