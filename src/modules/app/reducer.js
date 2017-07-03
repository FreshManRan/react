//create 17,06,30 lc
import * as actions from './actions'
export default (state = {name:'xxx'}, action) => {
    let nextState = Object.assign({},state);
    switch(action.type){
        case actions.normal.init:
            nextState.name = action.data.name;
            break;
    }
    return nextState;
}