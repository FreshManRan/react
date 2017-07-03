import sageMiddleware from './saga-middleware';
export default (modules) => {
    modules.forEach((v) => {
        if(v.watchAction){
            sageMiddleware.run(v.watchAction);
        }
    })
}