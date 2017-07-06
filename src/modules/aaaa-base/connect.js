import {connect} from 'react-redux';
import * as constant from './constant';
import {Component} from './components';
let mapStateToProps = (props) => {
    let nextProps = Object.assign({},props[constant.NAME]);
    return {

    }
}
let mapStateToDispatch = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(Component);