//create 17,07,03 lc
module.exports = {
    getAppData:() => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve({
                    startTime:+new Date()
                });
            },500);
        });
    }
}