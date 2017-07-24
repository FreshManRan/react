//create 17,06,30 lc
import * as actions from './actions'
export default (state = {}, action) => {
    let nextState = Object.assign({},state);
    switch(action.type){
        case actions.normal.init:
            break;
    }
    return nextState;
}