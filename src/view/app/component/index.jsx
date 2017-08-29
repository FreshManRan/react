import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Component extends React.Component {
    componentWillMount(){
        this.props.init();
    }
    render(){
        return (
            <div>这里是App-view</div>
        )
    }
}

export default Component;