//create 17,06,30 lc
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './core/create-store';
import runSagaMiddleware from './core/run-saga-middleware';
/*--模块--*/
import * as App from './modules/app';
let modules = [
    App
];
let store = createStore(modules);
//saga中间件事件在store之后添加
runSagaMiddleware(modules);

ReactDOM.render(
    <Provider store = {store}>
        <App.ConnectComponent/>
    </Provider>,
    document.getElementById('app-container')
);