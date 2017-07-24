import {connect} from 'react-redux';
import * as constant from './constant';
import {Component} from './components';
let mapStateToProps = (state,props) => {
    let nextState = Object.assign({},state[constant.NAME]);
    return {

    }
}
let mapStateToDispatch = (dispatch,props) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(Component);