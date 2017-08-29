import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    componentDidMount(){
        this.props.init();
    }
    render(){
        return (
            <div>这里是App-view</div>
        )
    }
}

export {App}