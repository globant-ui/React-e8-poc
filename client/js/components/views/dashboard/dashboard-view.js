import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';
import {ScatterChart} from './scatter-chart';

export default class DashboardView extends React.Component{
  render(){
    return (
      <MainViewTpl>
        <MainViewHeader header="Dashboard"/>
        <ScatterChart />
      </MainViewTpl>
    );
  }
}
