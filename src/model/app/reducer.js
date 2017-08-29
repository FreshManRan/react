import * as action from './action';
export default (state = null,params) => {
    let nextState = Object.assign({},state);
   switch(params.type){
       case action.CHANGE_INIT:
            nextState.name = params.data.name;
        break; 
   }
    return nextState;
}