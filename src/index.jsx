import * as magic from './magic';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';



import core from 'core';
import model from 'model';
import view from 'view';

((model) => {
    let store = core.createStore(model)
    let AppComponent = view.App.connectComponent;
    ReactDOM.render(
        <Provider store = {store}>
            <AppComponent/>
        </Provider>,
        document.getElementById('app-container')
    )
})(model);

