import React from 'react';

class CustomPanelHeader extends React.Component{
    constructor(){
        super();
    }
    handleHeaderClick(e){
        var status = 'open';
        if(document.getElementById(this.props.componentId).getElementsByClassName('collapse in').length > 0){
            status = "close";
        }
       
        if(this.props.onClick){
            this.props.onClick(status);
        }
    }
    render(){
        return(
            <div className='custom-header' style={{'cursor':'pointer'}} onClick={(e) => this.handleHeaderClick(e)}>
                {this.props.children}
            </div>
        );
    }
}

export default CustomPanelHeader;