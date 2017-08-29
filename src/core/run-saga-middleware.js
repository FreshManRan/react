export default (sagaMiddleware,models) => {
    models.forEach((v) => {
        if(!v.watchAction){return}
        sagaMiddleware.run(v.watchAction);
    });
}
