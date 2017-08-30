import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Component extends React.Component {
    componentWillMount(){
        this.props.init();
    }
    render(){
        let {name} = this.props;
        return (
            <div>这里是{name}</div>
        )
    }
}

export default Component;