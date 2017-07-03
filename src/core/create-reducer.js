//create 17,06,30 lc
import {combineReducers} from 'redux';
export default (modules) => {
    let reducers = {};
    modules.forEach((v) => {
        if(v.reducer == undefined){ return}
        reducers[v.constant.NAME] = v.reducer;
    });
    return combineReducers(reducers);
}