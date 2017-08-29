export default (() => {
    Function.prototype.after = function(fnc){
        let fn = this;
        return function(){
           let result =  fn.apply(this,arguments);
           if(typeof fnc == 'function'){
                fnc();
           }
           return result;
        }
    };
})();