import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import CustomTable from 'js/components/table-component/custom-table';
import Gender from 'js/components/table-component/custom-gender';

import CustomSlider from 'js/components/range-slider-component/custom-range-slider';

import CustomAccordion from 'js/components/accordion-component/custom-accordion';

import CustomExpandCollapse from 'js/components/expand-collapse-component/custom-expand-collapse';
import CustomPanelHeader from 'js/components/expand-collapse-component/custom-panel-header';
import Arrow from 'js/components/expand-collapse-component/toggle-arrow-component';

import CustomTabComponent from 'js/components/tab-component/custom-tab-component';
import CustomTabHeader from 'js/components/tab-component/custom-tab-header';

import CustomDateRange from 'js/components/date-range-component/custom-date-range-component';

export default class InvestigatorView extends React.Component{  
  constructor(){
    super();
    this.state = {
      "tableData" : {
            "title":"Custom Table React Template",
            "columnDetail": [{"title":"Name","isRequired":true,"sortType":"content", "defaultSort":"asc"},{"title":"Location","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Age","isRequired":true,"sortType":"content","defaultSort":"asc"},{"title":"Sex","isRequired":true,"customComponent":Gender,"sortType":"custom_content","defaultSort":"asc","sortField":"gender"},{"title":"Birthdate","isRequired":true,"sortType":"date","defaultSort":"asc"}],
            "tableContent": [
                {"Location":"Mumbai","Age":"28","Name":"Vikram","Sex":{"gender":"Male","isImage":true},"Birthdate":"February 24, 1988"},
                {"Name":"Bankim","Sex":{"gender":"Male","isImage":true},"Location":"Pune","Age":"28","Birthdate":"February 24, 1988"},
                {"Name":"Pooja","Age":"26","Location":"Surat","Sex":{"gender":"Female","isImage":true},"Birthdate":"March 11, 1988"},
                {"Name":"Sivaprasad Raju","Age":"30","Location":"Pune","Sex":{"gender":"Male","isImage":true},"Birthdate":"June 11, 1995"},
                {"Name":"Alessia","Age":"25","Location":"Delhi","Sex":{"gender":"Female","isImage":true},"Birthdate":"July 11, 1995"},
                {"Name":"Abhimanyu","Age":"29","Location":"Hydrabad","Sex":{"gender":"Male","isImage":true},"Birthdate":"September 15, 1985"},
                {"Name":"Danica","Age":"32","Location":"Goa","Sex":{"gender":"Female","isImage":true},"Birthdate":"September 11, 1985"}
            ]
        },

      "accordionData" :{
        "panels": [
          {
            "header" : "Collapsible Group Item #1",
            "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "eventKey": "1",
            "componentUsed": "NA", // false or component instance
            "componentData": {} // used component's data
          },
          {
            "header" : "Collapsible Group Item #2",
            "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "eventKey": "2",
            "componentUsed": Gender, // false or component instance
            "componentData": {"gender":"Male","isImage":true} // used component's data
          },
          {
            "header" : "Collapsible Group Item #3",
            "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            "eventKey": "3",
            "componentUsed": Gender, // false or component instance
            "componentData": {"gender":"Female","isImage":true} // used component's data
          }
        ]
      },

      "expandPanelStatus": "close",  
      "tabContainerStatus": "close",  
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

  render(){
    const customHeader = <CustomPanelHeader componentId='propertyContainer' onClick={(status) => this.onToggleComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.expandPanelStatus}/><h3 style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Properties</h3></div></CustomPanelHeader>;

    const customHeaderTab = <CustomPanelHeader componentId='behaviourContainer'  onClick={(status) => this.onToggleTabComponent(status)}><div style={{"display":"table"}}><Arrow arrowStatus={this.state.tabContainerStatus}/><h3 style={{"display":"table-cell","verticalAlign": "middle"}}>Entity Behavior Details</h3></div></CustomPanelHeader>;

    return (
      <MainViewTpl>
        <MainViewHeader header="Investigator"/>
        <CustomDateRange/>
        <CustomSlider minVal={this.state.sliderData.minVal} maxVal={this.state.sliderData.maxVal} stepVal={this.state.sliderData.stepVal}  currentVal={this.state.sliderData.currentVal} marks={this.state.sliderData.marks} onChange={(currVal) => this.handleSliderChange(currVal)}/>
        
        <CustomTable tableData={this.state.tableData}/>

        <CustomExpandCollapse id="behaviourContainer"  header={customHeaderTab}>
          <CustomTabComponent data={this.state.tabComponentData}/>
        </CustomExpandCollapse>

        <CustomExpandCollapse id="propertyContainer"  header={customHeader}>
          <div className='right-container'>
            <i>No Entity Properties Found</i>
          </div>
        </CustomExpandCollapse>
      </MainViewTpl>
    );
  }
}