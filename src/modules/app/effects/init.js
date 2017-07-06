//create 17,07,03 lc
import {delay} from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as mockRequest from 'mockRequest';
export default function* init(action){
    let data = yield mockRequest.getAppData();
    yield put({
        type:actions.normal.init,
        data:data
    });
}