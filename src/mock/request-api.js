export default {
    appInit:function(){
        return new Promise(function(resolve,reject){
            window.setTimeout(() => {
                resolve({
                    name:'my-app'
                })
            },1000);
        })
    }
}