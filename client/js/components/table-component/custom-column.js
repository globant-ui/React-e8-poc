import React from 'react';

class CustomColumn extends React.Component{
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.clickHandler(this.props.columnData.sortType, this.props.title);
    }
    
    render(){
        const isRequired = this.props.columnData.sortType !== undefined;
        return(<th className = {isRequired? 'allowClick' : 'blockClick'} onClick={isRequired? this.handleClick : ''}> {this.props.title} </th>);
     }
}

export default CustomColumn;