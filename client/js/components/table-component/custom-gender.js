import React from 'react';
import * as styles from '!style!css!stylus!./custom-gender.styl';
class Gender extends React.Component{
    render(){
        const imgBlock = (this.props.data.gender).toLowerCase() === "male" ? <span className='icon-male'/> : <span className='icon-female'/>;
        return <div>{this.props.data.isImage === true ? imgBlock : <span>{this.props.data.gender}</span>}</div>;
    }
}

export default Gender;