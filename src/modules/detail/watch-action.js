//create 17,07,06 lc
import {takeEvery} from 'redux-saga';
import * as actions from './actions';
import * as effects from './effects';
export default function* watchAction(){
    yield takeEvery(actions.effect.init,effects.init)
}