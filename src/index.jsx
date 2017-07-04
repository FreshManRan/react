//create 17,06,30 lc
//引入魔法
import nativeMagic from './magic/native-magic';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './core/create-store';
/*--模块--*/
import * as App from './modules/app';
let modules = [
    App
];
let store = createStore(modules);


ReactDOM.render(
    <Provider store = {store}>
        <App.ConnectComponent/>
    </Provider>,
    document.getElementById('app-container')
);