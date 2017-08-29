import {takeEvery} from 'redux-saga';
import * as action from './action';
import * as saga from './saga';
export default function* watchAction(){
    yield takeEvery(action.SAGA_INIT,saga.Init);
}