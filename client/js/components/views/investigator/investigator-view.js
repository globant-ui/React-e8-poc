import React from 'react';
import {connect} from 'react-redux';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import CustomTable from 'js/components/table-component/custom-table';
import CustomType from 'js/components/table-component/custom-type';
import CustomEntity from 'js/components/table-component/custom-entity';
import CustomExpandCollapse from 'js/components/expand-collapse-component/custom-expand-collapse';
import CustomPanelHeader from 'js/components/expand-collapse-component/custom-panel-header';
import Arrow from 'js/components/expand-collapse-component/toggle-arrow-component';
import CustomTabComponent from 'js/components/tab-component/custom-tab-component';
import TopActionPanel from 'js/components/top-action-panel-component/topActionPanel'
import CustomTabHeader from 'js/components/tab-component/custom-tab-header';
import * as styles from '!style!css!stylus!./investigator-view.styl';
import store from '../../../../store';
import {fetchEntityData, fetchEntityDataWithParams} from '../../../../actions/entity-actions';

class InvestigatorView extends TopActionPanel{  
  constructor(){
    super(...arguments);
    this.state = {
      
        "sliderData" : {
                "minVal" : 0,
                "maxVal" : 10,
                "stepVal" : 1,
                "currentVal" : [0,1],
                "marks": {
                0: <strong>0</strong>,
                1: <strong>1</strong>,
                2: <strong>2</strong>,
                3: <strong>3</strong>,
                4: <strong>4</strong>,
                5: <strong>5</strong>,
                6: <strong>6</strong>,
                7: <strong>7</strong>,
                8: <strong>8</strong>,
                9: <strong>9</strong>,
                10: <strong>10</strong>,
                }
            },
            "tableDefination": {
            title:"Entity Results",
            currentRowID: "row_0",
            columnDetail: [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
        },
        "entityList": [],
        "currentSelectionEntity": {"entityType":"system","entityTitle":"system@authority","displayMode":"4x"},
    }
    this.updateTableContent = this.updateTableContent.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  handleSliderChange(p_currentValue){
      const objSlider = Object.assign({},this.state.sliderData,{currentVal:p_currentValue})
      this.setState({
          "sliderData": objSlider
      });
      console.log("@@@@@@@@@Slider Value:"+p_currentValue);
      //fetchEntityDataWithParams();
  }

  handleDateRangeChange(param){
    console.log(param);
    //fetchEntityDataWithParams();
  }

  onSelectChange(param1,param2){
    console.log(param1);
      //fetchEntityDataWithParams();
  }
  onDropdownValueChange(param1, param2){
    debugger;
    console.log("Inside investigator view" , param1);
  }

  onToggleComponent(p_strStatus){
    store.dispatch({type:"UPDATE_PROPERTY_PANEL_STATE"});
  }

  onToggleTabComponent(p_strStatus){
    store.dispatch({type:"UPDATE_DETAIL_PANEL_STATE"});
  }

  onToggleGraphTabComponent(p_strStatus){
    store.dispatch({type:"UPDATE_GRAPH_PANEL_STATE"});
  }

  onTableDataSelectionChange(p_rowContent){
		console.log(p_rowContent);
		var currentObj = Object.assign({},p_rowContent.Entities,{"displayMode":"4x"})
		this.setState({
			"currentSelectionEntity": currentObj
		})
  }

  sortTableData(p_content){
    this.setState({"entityList":p_content});
  }

  componentWillMount(){
    fetchEntityData(this.updateTableContent)
  }

  updateTableContent(p_payload){
      var tableArr = [];
      var currentRowID = "";
      for(let i = 0; i < p_payload.data.length ; i++){
          for(let j=0; j < p_payload.data[i].options.length; j++){
              tableArr.push(p_payload.data[i].options[j]);
              if(i == 0 && j == 0){
                  currentRowID = "row_"+p_payload.data[i].options[j].Entities.entityType + "_" + p_payload.data[i].options[j].Entities.entityTitle;
              }
          }
      }
      store.dispatch({type:'UPDATE_CURRENT_ROW_ID',currentRowID:currentRowID});
      this.setState({"entityList":tableArr});
  }

  componentWillReceiveProps(){
       this.render();
   }
   
  render(){
    const customHeader = <CustomPanelHeader componentId='propertyContainer' onClick={(status) => this.onToggleComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.propertyPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Properties</p></div></CustomPanelHeader>;

    const customHeaderTab = <CustomPanelHeader componentId='behaviourContainer'  onClick={(status) => this.onToggleTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.detailPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Details</p></div></CustomPanelHeader>;

    const customGraphHeader = <CustomPanelHeader componentId='graphContainer'  onClick={(status) => this.onToggleGraphTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.graphPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Graph</p><span style={{paddingLeft:"10px"}} className='fa fa-sort-amount-asc fa-sm'/></div></CustomPanelHeader>;

    return (
		<MainViewTpl>
      {super.renderHeader()}
			<div id={'bottom-container'}>
				<div id={'bottom-left-container'}>
					<CustomTable tableDataSelectHandler={(p_rowContent)=>this.onTableDataSelectionChange(p_rowContent)} sortTableData={(p_tableContent)=>this.sortTableData(p_tableContent)} tableData={this.state.entityList} currentRowID={this.props.entity.currentRowID} tableDefination={this.state.tableDefination}/>
				</div>
				<div id={'bottom-right-container'}>
					<CustomExpandCollapse id="graphContainer"  header={customGraphHeader}>
						<div className='right-container'>
							<i>Graph is WIP</i>
						</div>
					</CustomExpandCollapse>
					<CustomEntity data={this.state.currentSelectionEntity}/>
					<CustomExpandCollapse id="propertyContainer"  header={customHeader}>
						<div className='right-container'>
							<i>No Entity Properties Found</i>
						</div>
					</CustomExpandCollapse>
					<CustomExpandCollapse id="behaviourContainer"  header={customHeaderTab}>
						<CustomTabComponent data={this.props.behaviorDetail}/>
					</CustomExpandCollapse>
				</div>
			</div>
		</MainViewTpl>
    );
  }
}

function select(store){
   return{
    entity: store.entity,
    behaviorDetail: store.entityDetail.behaviorDetail,
    graphPanelState: store.panelState.graphPanelState,
    propertyPanelState: store.panelState.propertyPanelState,
    detailPanelState: store.panelState.detailPanelState
  };
}

export default connect(select)(InvestigatorView);