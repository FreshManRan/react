export default (type,module,action) => {
   switch (type){
        case 'effect':
            return '##_' + module + '_EFFECT_' + action;
        case 'normal':
            return '&&_' + module + '_NORMAL_' + action;
   }
   return action;
}