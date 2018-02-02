import { take, put, call } from 'redux-saga/effects';
import * as action from '../action';
import mockRequest from 'mockRequest';
export default function* init(){
    let data = yield call(mockRequest.appInit);
    yield put({
        type : action.CHANGE_INIT,
        data:data
    });
}