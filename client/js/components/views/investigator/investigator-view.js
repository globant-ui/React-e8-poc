import React from 'react';
import {MainViewTpl, MainViewHeader} from 'js/components/base-views/main-view';

export default class InvestigatorView extends React.Component{
  render(){
    return (
      <MainViewTpl>
        <MainViewHeader header="Investigator"/>
      </MainViewTpl>
    );
  }
}
