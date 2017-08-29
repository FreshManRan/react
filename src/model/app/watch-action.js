import {takeEvery} from 'redux-saga';
import * as actions from './actions';
import * as saga from './saga';
export default function* watchAction(){
    yield takeEvery(actions.SAGA_INIT,saga.Init);
}