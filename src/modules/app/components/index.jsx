//create 17,06,30 lc
import PropTypes from 'prop-types';
import * as React from 'react';
import {Route} from 'react-router-dom';
import * as Header from './header';
import * as Nav from './nav';
import * as DetailModule from '../../detail';
import * as UserModule from '../../user';
import * as HomeModule from '../../home';
class Component extends React.PureComponent {
    componentWillMount(){
       //初始化app
       this.props.tryInit();
    }
    render(){
        return (
            <div className='app-container'>
                <Header.Component/>
                <Nav.Component/>
                <Route exact path='/' component = {HomeModule.Component}/>
                <Route path='/detail' component = {DetailModule.Component}/>
                <Route path='/user' component = {UserModule.Component}/>
            </div>
        )
    }
}

export {Component};