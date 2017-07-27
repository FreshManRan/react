//create 17,07,03 lc
import * as React from 'react';
import * as Widgets from '../../widgets';
class Component extends React.PureComponent{
    render(){
        return (
            <article>
                我是主页页面
                <Widgets.Focus>
                    <li>1111111111</li>
                    <li>222222222</li>
                    <li>333333333</li>
                    <li>4444444444444</li>
                </Widgets.Focus>

            </article>
        );
    }
}

export {Component};