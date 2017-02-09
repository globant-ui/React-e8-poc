import React from'react';
import * as styles from '!style!css!stylus!./custom-tab-header.styl';
class CustomTabHeader extends React.Component{
    render(){
        return(
    <span className={'custom-tab-header'}><span className={'fa fa-square fa-sm icon-container-'+this.props.iconData}></span><p className={'header-txt-container'}>{this.props.title}</p></span>
        );
    }
}

export default CustomTabHeader;