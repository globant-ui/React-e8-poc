import React from 'react';
import * as styles from '!style!css!stylus!./custom-entity.styl';

class CustomEntity extends React.Component{
    render(){
        const imgBlock = (this.props.data.entityType).toLowerCase() === "system" ? <span className={'icon-entity fa fa-desktop fa-'+this.props.data.displayMode}/> : <span className={'icon-entity fa fa-user fa-'+this.props.data.displayMode}/>;
        return <div className={'entity-container-'+this.props.data.displayMode}>{imgBlock}<span className={'block-txt-'+this.props.data.displayMode}>{this.props.data.entityTitle}</span></div>;
    }
}

export default CustomEntity;