//create 17,07,07 lc
import * as React from 'react';
class Component extends React.PureComponent{
    render(){
        return (
            <ul className='widget-focus'>
                {
                    this.props.children.map((v)=>{
                        return v;
                    })
                }
            </ul>
        );
    }
}

export default Component;