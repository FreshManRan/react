export default (type,moduleName,action) => {
   switch (type){
        case 'effect':
            return '##_' + moduleName + '_EFFECT_' + action;
        case 'normal':
            return '&&_' + moduleName + '_NORMAL_' + action;
   }
   return action;
}