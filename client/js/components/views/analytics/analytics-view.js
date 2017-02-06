import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import {DropdownView} from './drop-down';
import {DropdownGroupView} from './drop-down-group';



export default class AnalyticsView extends React.Component{
  render(){
    return (
      <MainViewTpl>
        <MainViewHeader header="Analytics" title="Analytics"/>
           <DropdownView />
           <DropdownGroupView />
           
      </MainViewTpl>
    );
  }
}
