//create 17,07,06 lc
import {put} from 'redux-saga/effects';
import * as mockRequest from 'mockRequest';
import * as actions from '../actions';
export default function* init(action){
    yield put({
        type:actions.normal.init,
        data:{}
    })
}