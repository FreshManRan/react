//create 17,07,06 lc
import * as React from 'react';
import {Link} from 'react-router-dom';
class Component extends React.PureComponent{
    render(){
        return (
            <nav>
                <Link to='/'>首页</Link>-
                <Link to='/detail'>详情</Link>-
                <Link to='/user'>用户</Link>
            </nav>
        )
    }
}

export {Component}