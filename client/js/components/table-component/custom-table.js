import React from 'react';
import CustomColumn from 'js/components/table-component/custom-column';
import CustomRow from 'js/components/table-component/custom-row';
import * as styles from '!style!css!stylus!./custom-table.styl';

class CustomTable extends React.Component{
    constructor(){
        super();
        this.validateData = this.validateData.bind(this);
        this.getDefaultSort = this.getDefaultSort.bind(this);
        this.state = {
            "currentRowID": "row_0"
        }
    }

    validateData(){
        for(let i = 0 ; i < this.props.tableData.columnDetail.length; i++) {
            if(this.props.tableData.columnDetail[i].isRequired === true){
                for(let j = 0; j < this.props.tableData.tableContent.length; j++){
                    if(!this.props.tableData.tableContent[j][this.props.tableData.columnDetail[i].title]){
                        this.props.tableData.tableContent[j][this.props.tableData.columnDetail[i].title] = "NA";
                    }
                }
            }
        }
        return true;
    }

    sortTableListByDate(p_columnValue,p_sortType,p_isCustomField){ 
			const arrUpdatedList = this.props.tableData.tableContent.sort(function(a, b){
                var dateA,dateB;
                if(!p_isCustomField){
                    dateA = new Date(a[p_columnValue]);
                    dateB = new Date(b[p_columnValue]);
                }
                else {
                    dateA = new Date(a[p_columnValue][p_isCustomField]);
                    dateB = new Date(b[p_columnValue][p_isCustomField]);
                }
                 if(p_sortType === "asc"){
                     return dateA-dateB //sort by date ascending
                }
				else {
                    return dateB-dateA //sort by date ascending
                }
			});
            /*var objTableData = Object.assign({},this.state.tableData);
            objTableData.tableContent = arrUpdatedList;
            this.setState({
                tableData : objTableData
            });*/
		}

    sortTableByName(p_columnValue,p_sortType,p_isCustomField){ 
			const arrUpdatedList = this.state.tableData.tableContent.sort(function(a, b){
                var nameA,nameB;
                if(!p_isCustomField){
                    nameA = a[p_columnValue].toLowerCase();
                    nameB = b[p_columnValue].toLowerCase();
                }
                else {
                    nameA = a[p_columnValue][p_isCustomField].toLowerCase();
                    nameB = b[p_columnValue][p_isCustomField].toLowerCase();
                }
                
                if(p_sortType === "asc"){
                    if (nameA < nameB) //sort string ascending
                        return -1 
                    if (nameA > nameB)
                        return 1
                }
                else {
                    if (nameA > nameB) //sort string ascending
                        return -1 
                    if (nameA < nameB)
                        return 1
                }
               
                return 0 //default return value (no sorting)
            });
            var objTableData = Object.assign({},this.state.tableData);
            objTableData.tableContent = arrUpdatedList;
            this.setState({
                tableData : objTableData
            });
		}
    
    handleSorting(p_sortType,p_columnId){
       /*if(p_sortType === "content"){
           this.sortTableByName(p_columnId,this.getDefaultSort(p_columnId),null);
       }
       else if(p_sortType === "custom_content"){
           this.sortTableByName(p_columnId,this.getDefaultSort(p_columnId),this.getCustomSortField(p_columnId));
       }
       else if(p_sortType === "date"){
           this.sortTableListByDate(p_columnId,this.getDefaultSort(p_columnId),this.getCustomSortField(p_columnId));
       }
       else if(p_sortType === "custom_date"){
           this.sortTableListByDate(p_columnId,this.getDefaultSort(p_columnId),this.getCustomSortField(p_columnId));
       }*/
     }


     getCustomSortField(p_columnId){
         for(let i = 0 ; i < this.state.tableData.columnDetail.length; i++) {
             if(this.state.tableData.columnDetail[i].title === p_columnId){
                 return this.state.tableData.columnDetail[i].sortField;
             }
         }
     }

     getDefaultSort(p_columnId){
         for(let i = 0 ; i < this.state.tableData.columnDetail.length; i++) {
             if(this.state.tableData.columnDetail[i].title === p_columnId){
                 if(this.state.tableData.columnDetail[i].defaultSort === 'asc'){
                     this.state.tableData.columnDetail[i].defaultSort = "desc";
                     return "asc";
                 }
                 else{
                     this.state.tableData.columnDetail[i].defaultSort = "asc";
                     return "desc";
                 }
             }
         }
     }

    createCustomColumnList(){
        const result = [];
        for(let i = 0 ; i < this.props.tableData.columnDetail.length; i++) {
             if(this.props.tableData.columnDetail[i].isRequired === true){
                 result.push(this.props.tableData.columnDetail[i]);
             }
        }
        const mappedColumn = result.map((columnData,i) => <CustomColumn key={i} clickHandler = {(sortType,columnId) => this.handleSorting(sortType,columnId)} title = {columnData.title} columnData={columnData}/>);
        return mappedColumn;
    }

   componentDidMount() {
        /**this.setState({
            tableData : this.props.tableData,
            "currentRowID": "row_"+this.props.tableData.tableContent[0].Entities.entityType+"_"+this.props.tableData.tableContent[0].Entities.entityTitle
        });**/
   }

   rowClickHandler(p_objRowContent, currentRowId){
       if(!document.getElementById(currentRowId).classList.contains("active-row")){
            this.setState({
                "currentRowID": currentRowId
            })
            if(this.props.tableDataSelectHandler){
                this.props.tableDataSelectHandler(p_objRowContent);
            }
       }
   }

   render(){

        if(this.props.tableData){
            if(this.validateData() === false){
                return(<h2 className='data-warning'>Invalid Table Data Received!!</h2>);
            }
            else {
                const mappedRows = this.props.tableData.tableContent.map((rowData,i)=> <CustomRow currentRow={this.props.currentRowID} onClick={(data,currentRowId) => this.rowClickHandler(data,currentRowId)} id={"row_"+rowData.Entities.entityType+"_"+rowData.Entities.entityTitle} key={i} rowContent={rowData} columnDetail={this.props.tableData.columnDetail}/>);
                return(
                    <div className='custom-table'>
                        <div id='customTableHeader'>
                            <h2>{this.props.tableData.title}</h2>
                        </div>
                        <div id='customTableContainer'>
                            <table>
                                <tbody>
                                    <tr>{this.createCustomColumnList()}</tr>
                                    {mappedRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            }
        }
        else{
            return <span>Loading...</span>
        }
        
    }
}
export default CustomTable;