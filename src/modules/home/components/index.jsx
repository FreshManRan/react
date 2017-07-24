//create 17,07,03 lc
import * as React from 'react';
import * as Widgets from '../../widgets';
class Component extends React.PureComponent{
    render(){
        return (
            <article>
                我是主页页面
                <Widgets.Focus>
                    <li href='xxx'><img src='xxx'/></li>
                    <li>222222222</li>
                    <li>33333333333</li>
                    <li>44444444444</li>
                </Widgets.Focus>

            </article>
        );
    }
}

export {Component};