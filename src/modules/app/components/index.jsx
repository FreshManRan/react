//create 17,06,30 lc
import * as React from 'react';
class Component extends React.PureComponent {
    componentWillMount(){
        this.props.init();
    }
    render (){
        let {name} = this.props;
        return (
            <div>这里是APP：{name}</div>
        )
    }
}

export {Component};