//create 17,07,04 lc
//纯属瞎折腾
export default (() => {
    Function.prototype.bind = function(){
        let args = [].slice.call(arguments);
        let self = args.shift();
        let fn = this;
        return function(){
            let nextArgs = [].slice.call(arguments);
            return fn.apply(self,args.concat(nextArgs));
        }
    }
    Function.prototype.before = function(fnc){
        let fn = this;
        return function(){
            if(typeof fnc === 'function'){
                fnc();
            }
            return  fn.apply(this,arguments);
        }
    }
    Function.prototype.after = function(fnc){
        let fn = this;
        return function(){
            let result =  fn.apply(this,arguments);
            if(typeof fnc === 'function'){
                fnc();
            }
            return result;
        }
    }
})();