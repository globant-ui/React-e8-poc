import React from 'react';

class CustomRow extends React.Component{
    constructor(){
        super();

        this.onRowClickHandler = this.onRowClickHandler.bind(this);
    }
    createRowItem(){
        const result = [];
        for(let i = 0; i < this.props.columnDetail.length ; i++){
            if(this.props.columnDetail[i].isRequired === true){
                if(this.props.columnDetail[i].customComponent !== undefined){
                    result.push({"title":this.props.rowContent[this.props.columnDetail[i].title], "component":this.props.columnDetail[i].customComponent});
                }
                else {
                     result.push({"title":this.props.rowContent[this.props.columnDetail[i].title], "component":"NA"});
                }
                   
            }
        }
        const mappedRowItems = result.map((cellContent,index) => cellContent.component !== "NA" ? <td key={index}><cellContent.component data={cellContent.title}/></td> : <td key={index}>{cellContent.title}</td>);
        return mappedRowItems;
    }

    onRowClickHandler(){
        if(this.props.onClick){
            this.props.onClick(this.props.rowContent,this.props.id);
        }
    }

    render(){
        return(
            <tr id={this.props.id} style={{cursor:'pointer'}} onClick={this.onRowClickHandler}>{this.createRowItem()}</tr>
        );
    }
}

export default CustomRow;