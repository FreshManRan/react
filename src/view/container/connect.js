import {connect} from 'react-redux';
import component from './component';
import * as action from './action';

let mapStateToProps = (state,props) => {
    return {
        name : state.APP.name
    }
}
let mapStateToDispatch = (dispatch) => {
    return {
        init:() => {
            dispatch({
                type:action.SAGA_INIT
            })
        }
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(component);