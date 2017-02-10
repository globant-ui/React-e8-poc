import React from 'react';
import * as styles from '!style!css!stylus!./custom-type.styl';

class CustomType extends React.Component{
    render(){
        return <div className={'custom-type-component'}><span className={'icon-type fa fa-link fa-lg'}/></div>;
    }
}

export default CustomType;