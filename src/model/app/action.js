import * as constants from './constants';
import core from 'core';

const SAGA_INIT = core.sagaAction(constants.NAME,'INIT');

const CHANGE_INIT = core.changeAction(constants.NAME,'INIT');

export {SAGA_INIT,CHANGE_INIT}