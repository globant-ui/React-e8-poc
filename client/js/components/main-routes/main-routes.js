import { Route , IndexRoute} from 'react-router'
import DashboardView from '../views/dashboard/dashboard-view';
import InvestigatorView from '../views/investigator/investigator-view';
import AnalyticsView from '../views/analytics/analytics-view';

import {Nav} from '../navigation/navigation'
import React from 'react';

export function pageRoutes(){
    return [
       <IndexRoute key="index" component={DashboardView}/>,
       ViewRoute(InvestigatorView, '/investigator'),
       ViewRoute(DashboardView, '/dashboard'),
       ViewRoute(AnalyticsView, '/analytics')
   ];
}

export function renderRoutes(){
    return [
       <Nav key='dashboard' url='/dashboard' label="DASHBOARD"/>,
       <Nav key='investigator' url='/investigator' label="INVESTIGATOR"/>,
       <Nav key='analytics' url='/analytics' label="ANALYTICS"/>

   ];
}

export function ViewRoute(Component, url){
  return <Route key={url} path={url} component={Component} />
}
