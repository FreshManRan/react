//create 17,07,03 lc
module.exports = {
    getAppData:() => {
        return new Promise((resolve,reject) => {
            if(2 > 1){
                setTimeout(()=>{
                    resolve({
                        name:'app模块'
                    });
                },100);
            }else{
                reject('划擦了');
            }
        });
    }
}