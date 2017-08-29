export default store => next => action => {
    console.group(action);
    if(typeof action == 'function'){
        action();
        return;
    }
    console.log('next-state')
    console.log(store.getState())
    console.groupEnd();
    return next(action);
}