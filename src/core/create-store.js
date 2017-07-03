//create 17,06,30 lc
import {createStore,applyMiddleware} from 'redux';
import createReducer from './create-reducer';
import middleware from './middleware';
import sageMiddleware from './saga-middleware';
export default (modules) => {
    let reducers = createReducer(modules);
    return createStore( reducers, applyMiddleware( sageMiddleware, middleware));
}