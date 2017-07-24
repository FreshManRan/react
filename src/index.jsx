//create 17,06,30 lc
require('../scss/index.scss');
//引入魔法
import nativeMagic from './magic/native-magic';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as core from 'core';
/*--模块--*/
import * as App from './modules/app';
import * as Detail from './modules/detail';
import * as User from './modules/user';
import * as Home from './modules/home';
//初始化渲染
(function(modules){
    let store = core.createStore(modules);
    ReactDOM.render(
        <Provider store = {store}>
            <BrowserRouter>
                <Route path='/' component = {App.Component}/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('node-container')
    );
})([App, Detail, User, Home]);