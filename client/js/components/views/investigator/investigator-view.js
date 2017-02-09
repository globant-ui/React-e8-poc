import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import CustomTable from 'js/components/table-component/custom-table';
import CustomType from 'js/components/table-component/custom-type';
import CustomEntity from 'js/components/table-component/custom-entity';

import CustomSlider from 'js/components/range-slider-component/custom-range-slider';

import CustomAccordion from 'js/components/accordion-component/custom-accordion';

import CustomExpandCollapse from 'js/components/expand-collapse-component/custom-expand-collapse';
import CustomPanelHeader from 'js/components/expand-collapse-component/custom-panel-header';
import Arrow from 'js/components/expand-collapse-component/toggle-arrow-component';

import CustomTabComponent from 'js/components/tab-component/custom-tab-component';
import CustomTabHeader from 'js/components/tab-component/custom-tab-header';

import CustomDateRange from 'js/components/date-range-component/custom-date-range-component';
import * as styles from '!style!css!stylus!./investigator-view.styl';

export default class InvestigatorView extends React.Component{  
  constructor(){
    super();
    this.state = {
      "tableData" : {
            "title":"Entity Results",
            "columnDetail": [{"title":"Entities","isRequired":true,"customComponent":CustomEntity,"sortType":"custom_content","defaultSort":"asc","sortField":"entityTitle"},{"title":"Behavior","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Type","isRequired":true,"customComponent":CustomType},{"title":"Score","isRequired":true,"sortType":"date","defaultSort":"asc"}],
            "tableContent": [
                {"Entities":{"entityType":"system","entityTitle":"system@authority"},"Behavior":"System Activity","Type":{},"Score":"10"},
                {"Entities":{"entityType":"system","entityTitle":"system1@authority"},"Behavior":"System Activity1","Type":{},"Score":"7"},
                {"Entities":{"entityType":"user","entityTitle":"user@authority"},"Behavior":"User Activity","Type":{},"Score":"9"},
                {"Entities":{"entityType":"system","entityTitle":"mysystem@authority"},"Behavior":"my system Activity","Type":{},"Score":"8.4"},
                {"Entities":{"entityType":"user","entityTitle":"bankim@authority"},"Behavior":"bankim Activity","Type":{},"Score":"6"},
                {"Entities":{"entityType":"system","entityTitle":"autosystem@authority"},"Behavior":"auto system Activity","Type":{},"Score":"7.8"},
                {"Entities":{"entityType":"user","entityTitle":"globant@authority"},"Behavior":"globant Activity","Type":{},"Score":"6.5"},
                {"Entities":{"entityType":"user","entityTitle":"user2@authority"},"Behavior":"User2 Activity","Type":{},"Score":"7.2"}
            ]
        },

      "expandPanelStatus": "close",  
      "tabContainerStatus": "close",  
      "graphContainerStatus": "close",  
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
      },
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
        }
        
      
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }



  handleSliderChange(p_currentValue){
    console.log(p_currentValue);
    const objSlider = Object.assign({},this.state.sliderData,{currentVal:p_currentValue})
    this.setState({
      "sliderData": objSlider
    });
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

  render(){
    const customHeader = <CustomPanelHeader componentId='propertyContainer' onClick={(status) => this.onToggleComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.expandPanelStatus}/><h3 style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Properties</h3></div></CustomPanelHeader>;

    const customHeaderTab = <CustomPanelHeader componentId='behaviourContainer'  onClick={(status) => this.onToggleTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.tabContainerStatus}/><h3 style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Details</h3></div></CustomPanelHeader>;

    const customGraphHeader = <CustomPanelHeader componentId='graphContainer'  onClick={(status) => this.onToggleGraphTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.graphContainerStatus}/><h3 style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Graph</h3><span style={{paddingLeft:"10px"}} className='fa fa-sort-amount-asc fa-lg'/></div></CustomPanelHeader>;

    return (
		<MainViewTpl>
			<div id={'top-container'}>
				<div id={'top-left-container'}>
					<div id={'top-left-top-container'}>
					    <p>Search Component...</p>
				    </div>
				    <div id={'top-left-bottom-container'}>
					    <div id={'top-left-bottom-left-container'}>
						    <CustomDateRange/>
					    </div>
					    <div id={'top-left-bottom-right-container'}>
						    <p><b>Behaviors</b></p><p>All Behaviors</p>
					    </div>
				    </div>
				</div>
			    <div id={'top-right-container'}>
				    <p><b>Risk Score</b></p>
				    <CustomSlider minVal={this.state.sliderData.minVal} maxVal={this.state.sliderData.maxVal} stepVal={this.state.sliderData.stepVal}  currentVal={this.state.sliderData.currentVal} marks={this.state.sliderData.marks} onChange={(currVal) => this.handleSliderChange(currVal)}/>
			    </div>
			</div>
		    <div id={'bottom-container'}>
				<div id={'bottom-left-container'}>
				    <CustomTable tableData={this.state.tableData}/>
			    </div>
				<div id={'bottom-right-container'}>
					<CustomExpandCollapse id="graphContainer"  header={customGraphHeader}>
						<div className='right-container'>
							<i>Graph is WIP</i>
						</div>
					</CustomExpandCollapse>
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