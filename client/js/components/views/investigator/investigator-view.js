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
import TimeGraph from 'js/components/graph-component/custom-graph';

class InvestigatorView extends TopActionPanel{  
  constructor(){
    super(...arguments);
    this.state = {
        graphData: [
                {"date":"2012-02-19","total":10},           
                {"date":"2012-02-23","total":9},
                {"date":"2012-03-8","total":7},
                {"date":"2012-03-15","total":5},
                {"date":"2012-03-21","total":4},
                {"date":"2012-04-15","total":10},
                {"date":"2012-04-23","total":3},
                {"date":"2012-04-12","total":1},
            ],
        sliderData : {
                "minVal" : 0,
                "maxVal" : 10,
                "stepVal" : 1,
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
          tableDefination : {
            title:"Entity Results",
            currentRowID: "row_0",
            columnDetail: [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
        },
        entityList: [],
        currentSelectionEntity: {"entityType":"system","entityTitle":"system@authority","displayMode":"4x"},
        isTopLevelUpdated: false
    }
    this.updateTableContent = this.updateTableContent.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.checkNewTableData = this.checkNewTableData.bind(this);
  }

  handleSliderChange(p_currentValue){
    this.setState({isTopLevelUpdated:true});
    store.dispatch({type:'UPDATE_SLIDER_CURRENT_VALUE',currentValue:p_currentValue});
  }

  handleDateRangeChange(param){
    console.log(param);
    var endDate = new Date(param.endDate._d);
    var strEndDate = endDate.getDate()+"-"+(endDate.getMonth()+1)+"-"+endDate.getFullYear();
    var startDate = new Date(param.startDate._d);
    var strStartDate = startDate.getDate()+"-"+(startDate.getMonth()+1)+"-"+startDate.getFullYear();
    this.setState({isTopLevelUpdated:true});
    store.dispatch({type:'UPDATE_DATE_RANGE',date:{startDate:strStartDate,endDate:strEndDate}});
  }

  onSelectChange(param1,param2){
      console.log(param1);
      this.setState({isTopLevelUpdated:true});
      store.dispatch({type:'UPDATE_FILTER_LIST',filterList:param1});
  }

  onDropdownValueChange(param1, param2){
    this.setState({isTopLevelUpdated:true});
    store.dispatch({type:'UPDATE_BEHAVIOR',behavior:param1});
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

  checkNewTableData(){
       if(this.state.isTopLevelUpdated === true){
         this.setState({isTopLevelUpdated:false});
         fetchEntityDataWithParams(this.updateTableContent,this.props.entity);
       }
  }

  componentWillReceiveProps(){
        setTimeout(this.checkNewTableData,100);
   }

   createPanelHeader(p_strId){
     switch(p_strId){
       case "propertyContainer":
        return <CustomPanelHeader componentId='propertyContainer' onClick={(status) => this.onToggleComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.propertyPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Properties</p></div></CustomPanelHeader>;
       break;

       case "behaviourContainer": 
        return <CustomPanelHeader componentId='behaviourContainer'  onClick={(status) => this.onToggleTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.detailPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Details</p></div></CustomPanelHeader>;
       break;

       case "graphContainer":
        return <CustomPanelHeader componentId='graphContainer'  onClick={(status) => this.onToggleGraphTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.props.graphPanelState}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Graph</p><span style={{paddingLeft:"10px"}} className='fa fa-sort-amount-asc fa-sm'/></div></CustomPanelHeader>;
       break;
     }
   }
   
  render(){
    const customHeader = this.createPanelHeader('propertyContainer');

    const customHeaderTab = this.createPanelHeader('behaviourContainer');

    const customGraphHeader = this.createPanelHeader('graphContainer');

    return (
		<MainViewTpl>
      {super.renderHeader()}
      
			<div id={'bottom-container'}>
				<div id={'bottom-left-container'}>
					<CustomTable tableDataSelectHandler={(p_rowContent)=>this.onTableDataSelectionChange(p_rowContent)} sortTableData={(p_tableContent)=>this.sortTableData(p_tableContent)} tableData={this.state.entityList} currentRowID={this.props.entity.currentRowID} tableDefination={this.state.tableDefination}/>
				</div>
				<div id={'bottom-right-container'}>
					<CustomExpandCollapse id="graphContainer"  header={customGraphHeader}>
						<div id='canvasContainer' className='right-container'>
							<TimeGraph {...this.props} parentId='canvasContainer' data={this.state.graphData}/>
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