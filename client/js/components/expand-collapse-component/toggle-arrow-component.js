import React from 'react';
import * as styles from '!style!css!stylus!./toggle-arrow-component.styl';

class ToggleArrow extends React.Component{
    render(){
        if(this.props.arrowStatus === "open"){
            return <span className='icon-arr-down fa fa-angle-double-down fa-2x'/>;
        }
        else{
            return <span className='icon-arr-up fa fa-angle-double-up fa-2x'/>;
        }
    }
}

export default ToggleArrow;