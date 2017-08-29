import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducers from './create-reducers';
import runSagaMiddleware from './run-saga-middleware';
import middleware from './middleware';
export default (model) => {
    let models = [];
    for(let k in model){
        models.push(model[k]);
    }

    let reducers = createReducers(models);
    let sagaMiddleware = createSagaMiddleware();
    
    return createStore.after(() => {
        runSagaMiddleware(
            sagaMiddleware,
            models
        );
    })(
        reducers,
        applyMiddleware(
            sagaMiddleware, 
            middleware
        )
    );
}