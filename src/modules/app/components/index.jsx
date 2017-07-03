//create 17,06,30 lc
import PropTypes from 'prop-types';
import * as React from 'react';
class Component extends React.PureComponent {
    componentWillMount(){
        this.props.init();
    }
    getChildContext(){
        let {name} = this.props;
        return {
            name:name
        }
    }
    render (){
        let {name} = this.props;
        return (
            <div>这里是APP：{name}</div>
        )
    }
}

Component.childContextTypes = {
    name:PropTypes.string
}
export {Component};