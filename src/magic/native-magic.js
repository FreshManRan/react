//create 17,07,04 lc
//纯属瞎折腾---划擦已划擦
export default (() => {
    //Function
    Function.prototype.bind = function(){
        let args = [].slice.call(arguments);
        let self = args.shift();
        let fn = this;
        return function(){
            let nextArgs = [].slice.call(arguments);
            return fn.apply(self,args.concat(nextArgs));
        }
    };
    Function.prototype.before = function(fnc){
        let fn = this;
        return function(){
            if(typeof fnc === 'function'){
                fnc();
            }
            return  fn.apply(this,arguments);
        }
    };
    Function.prototype.after = function(fnc){
        let fn = this;
        return function(){
            let result =  fn.apply(this,arguments);
            if(typeof fnc === 'function'){
                fnc();
            }
            return result;
        }
    };
    //Array
    Array.prototype.find = function(fnc){
        if(typeof fnc !== 'function'){
            return null;
        }
        let arr = this;
        let result = null;
        for (let i = 0,len = arr.length; i < len; i++){
            if(fnc(arr[i]) === true){
                result = arr[i];
                break;
            }
        }
        return result;
    };
    Array.prototype.findKey = function(fnc){
        if(typeof fnc !== 'function'){
            return null;
        }
        let arr = this;
        let result = -1;
        for (let i = 0,len = arr.length; i < len; i++){
            if(fnc(arr[i]) === true){
                result = i;
                break;
            }
        }
        return result;
    };
    Array.prototype.each = function(fnc){
        //forEach，map不能break 不好用
        if(typeof fnc !== 'function'){
            return null;
        }
        let arr = this;
        for (let i = 0,len = arr.length; i < len; i++){
            if(fnc(arr[i]) === false){
                break;
            }
        }
    }
})();