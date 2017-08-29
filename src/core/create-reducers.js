import * as Redux from 'redux';

export default (models) => {
    let reducers = {};
    models.forEach((v) => {
        reducers[v.constants.NAME] = v.reducer;
    });
    return Redux.combineReducers(reducers);
}

