//create 17,06,30 lc
export default store => next => action => {
    console.group(action)
    if(typeof action === 'function'){
        action();
        return;
    }
    let result = next(action);
    console.log('next-state')
    console.log(store.getState())
    console.groupEnd();
    return result;
    
}