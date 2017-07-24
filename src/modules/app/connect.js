//create 17,06,30 lc
import {connect} from 'react-redux';
import {Component} from './components';
import * as constant from './constant';
import * as actions from './actions';
let mapStateToProps = (state,props) => {
    let nextState = Object.assign({},state[constant.NAME]);
    return {
    };
}
let mapStateToDispatch = (dispatch,props) => {
    let doDispatch = {};
    //初始化
    doDispatch['tryInit'] = () => (dispatch({
        type:actions.effect.init
    }));
    return doDispatch;
}

export default connect(mapStateToProps,mapStateToDispatch)(Component);