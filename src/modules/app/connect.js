//create 17,06,30 lc
import {connect} from 'react-redux';
import {Component} from './components';
import * as constant from './constant';
import * as actions from './actions';
let mapStateToProps = (props) => {
    let nextProps = Object.assign({},props[constant.NAME]);
    return {
    };
}
let mapStateToDispatch = (dispatch) => {
    return {
        init:() => {
            dispatch({
                type:actions.effect.init
            });
        }
    };
}

export default connect(mapStateToProps,mapStateToDispatch)(Component);