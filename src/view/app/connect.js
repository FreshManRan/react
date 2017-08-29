import {connect} from 'react-redux';
import * as components from './components';
import * as actions from './actions';

let mapStateToProps = (state,props) => {
    return {

    }
}
let mapStateToDispatch = (dispatch,props) => {
    return {
        init:() => {
            dispatch({
                type:actions.SAGA_INIT
            })
        }
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(components.App);