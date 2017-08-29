import { take, put, call } from 'redux-saga/effects';
import * as Actions from '../actions';
export default function* init(action){
    
    yield put({
        type : Actions.CHANGE_INIT,
        data:111
    });
}