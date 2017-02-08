import React from 'react';
import * as styles from '!style!css!stylus!./toggle-arrow-component.styl';

class ToggleArrow extends React.Component{
    render(){
        if(this.props.arrowStatus === "open"){
            return <span className='icon-arr-down'/>;
        }
        else{
            return <span className='icon-arr-up'/>;
        }
    }
}

export default ToggleArrow;