import * as Action from './action';
export default (state = null,action) => {
    let nextState = Object.assign({},state);
   switch(action.type){
       case Action.CHANGE_INIT:
            nextState.name = action.data.name;
        break; 
   }
    return nextState;
}