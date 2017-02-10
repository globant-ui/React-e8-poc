import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import CustomTable from 'js/components/table-component/custom-table';
import CustomType from 'js/components/table-component/custom-type';
import CustomEntity from 'js/components/table-component/custom-entity';
import CustomExpandCollapse from 'js/components/expand-collapse-component/custom-expand-collapse';
import CustomPanelHeader from 'js/components/expand-collapse-component/custom-panel-header';
import Arrow from 'js/components/expand-collapse-component/toggle-arrow-component';
import CustomTabComponent from 'js/components/tab-component/custom-tab-component';
import CustomTabHeader from 'js/components/tab-component/custom-tab-header';


import * as styles from '!style!css!stylus!./investigator-view.styl';

export default class InvestigatorView extends React.Component{  
  constructor(){
    super();
    this.state = {
      "tableData" : {
            "title":"Entity Results",
            "columnDetail": [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
            "tableContent": [
                {"Entities":{"entityType":"system","entityTitle":"system@authority","displayMode":"2x"},"Behavior":"System Activity","Type":{},"Score":"10"},
                {"Entities":{"entityType":"system","entityTitle":"system1@authority","displayMode":"2x"},"Behavior":"System Activity1","Type":{},"Score":"7"},
                {"Entities":{"entityType":"user","entityTitle":"user@authority","displayMode":"2x"},"Behavior":"User Activity","Type":{},"Score":"9"},
                {"Entities":{"entityType":"system","entityTitle":"mysystem@authority","displayMode":"2x"},"Behavior":"my system Activity","Type":{},"Score":"8.4"},
                {"Entities":{"entityType":"user","entityTitle":"bankim@authority","displayMode":"2x"},"Behavior":"bankim Activity","Type":{},"Score":"6"},
                {"Entities":{"entityType":"system","entityTitle":"autosystem@authority","displayMode":"2x"},"Behavior":"auto system Activity","Type":{},"Score":"7.8"},
                {"Entities":{"entityType":"user","entityTitle":"globant@authority","displayMode":"2x"},"Behavior":"globant Activity","Type":{},"Score":"6.5"},
                {"Entities":{"entityType":"user","entityTitle":"user2@authority","displayMode":"2x"},"Behavior":"User2 Activity","Type":{},"Score":"7.2"}
            ]
        },

      "expandPanelStatus": "close",  
      "tabContainerStatus": "close",  
      "graphContainerStatus": "close",
	  "currentSelectionEntity": {"entityType":"system","entityTitle":"system@authority","displayMode":"4x"},  
      "tabComponentData":{
          "id": "behaviourTabComponent",
          "defaultActiveKey": "first",
          "tabArea": 12, //Value between 1 to 12 as Bootstrap devide screen in 12 column.
          "tabHeader": [
            {
              "title": <CustomTabHeader iconData={"green"} title="Anomalous User Activity"/>,
              "eventKey": "first",
              "subHeaderContent": "NA"
            },
            {
              "title": <CustomTabHeader iconData={"blue"} title="Privileged Access Anomally"/>,
              "eventKey": "second",
              "subHeaderContent": "NA"
            },
          ],
          "tabContainer": [
            {
             "eventKey": "first",
             "tabContent": "TabContent 1" 
            },
            {
             "eventKey": "second",
             "tabContent": "TabContent 2" 
            }
          ]
      }
    }
  }

  onToggleComponent(p_strStatus){
    this.setState({"expandPanelStatus":p_strStatus});
  }

  onToggleTabComponent(p_strStatus){
    this.setState({"tabContainerStatus":p_strStatus});
  }

  onToggleGraphTabComponent(p_strStatus){
    this.setState({"graphContainerStatus":p_strStatus});
  }

  onTableDataSelectionChange(p_rowContent){
		console.log(p_rowContent);
		var currentObj = Object.assign({},p_rowContent.Entities,{"displayMode":"4x"})
		this.setState({
			"currentSelectionEntity": currentObj
		})
  }

  render(){
    const customHeader = <CustomPanelHeader componentId='propertyContainer' onClick={(status) => this.onToggleComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.expandPanelStatus}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Properties</p></div></CustomPanelHeader>;

    const customHeaderTab = <CustomPanelHeader componentId='behaviourContainer'  onClick={(status) => this.onToggleTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.tabContainerStatus}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Details</p></div></CustomPanelHeader>;

    const customGraphHeader = <CustomPanelHeader componentId='graphContainer'  onClick={(status) => this.onToggleGraphTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.graphContainerStatus}/><p style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Graph</p><span style={{paddingLeft:"10px"}} className='fa fa-sort-amount-asc fa-sm'/></div></CustomPanelHeader>;

    return (
		<MainViewTpl>
			<div id={'bottom-container'}>
				<div id={'bottom-left-container'}>
					<CustomTable tableDataSelectHandler={(p_rowContent)=>this.onTableDataSelectionChange(p_rowContent)} tableData={this.state.tableData}/>
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
						<CustomTabComponent data={this.state.tabComponentData}/>
					</CustomExpandCollapse>
				</div>
			</div>
		</MainViewTpl>
    );
  }
}