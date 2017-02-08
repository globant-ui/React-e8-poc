import React from 'react';
import * as styles from '!style!css!stylus!./custom-entity.styl';

class CustomEntity extends React.Component{
    render(){
        const imgBlock = (this.props.data.entityType).toLowerCase() === "system" ? <span className='icon-system'/> : <span className='icon-user'/>;
        return <div style={{display:'table'}}>{imgBlock}<span className={'block-txt'}>{this.props.data.entityTitle}</span></div>;
    }
}

export default CustomEntity;