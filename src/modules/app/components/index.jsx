//create 17,06,30 lc
import PropTypes from 'prop-types';
import * as React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as Header from './header';
import * as Detail from '../../detail';
import * as User from '../../user';
import * as Home from '../../home';
class Component extends React.PureComponent {
    render (){
        return (
            <div>
                <Header.Component/>
                <Route exact path='/' component = {Home.Component}/>
                <Route path='/detail' component = {Detail.Component}/>
                <Route path='/user' component = {User.Component}/>
            </div>
        )
    }
}

export {Component};