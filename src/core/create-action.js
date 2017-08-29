export function changeAction(name,type){
    return '@@change-' + name + '-' + type;
}
export function sagaAction(name,type){
    return '@@saga-' + name + '-' + type;
}