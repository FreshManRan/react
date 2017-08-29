import * as Constants from './constants';
import core from 'core';

const SAGA_INIT = core.sagaAction(Constants.NAME,'INIT');

const CHANGE_INIT = core.changeAction(Constants.NAME,'INIT');

export {SAGA_INIT,CHANGE_INIT}