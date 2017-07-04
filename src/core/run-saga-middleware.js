//create 17,07,04 lc
export default (sageMiddleware,modules) => {
    modules.forEach((v) => {
        if(v.watchAction){
            sageMiddleware.run(v.watchAction);
        }
    })
}