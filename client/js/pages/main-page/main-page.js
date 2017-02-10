import React from 'react';
import './main.styl'
import * as styles from '!style!css!stylus!../../../css/font-awesome.css';
import {App, TopNav, Brand, NavItems} from 'js/components/navigation/navigation';
import {GlobalActions} from 'js/components/navigation/global-actions';
import {renderRoutes} from 'js/components/main-routes/main-routes';
import TopActionPanel from 'js/components/top-action-panel-component/topActionPanel';

export default class MainPage extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSliderChange(p_currentValue){
    console.log("Parent Component:"+p_currentValue);
  }

  render () {
    return (
        <App>
            <TopNav>
                <Brand title='<LG>'></Brand>
                <NavItems>
                  {renderRoutes()}
                </NavItems>
                <GlobalActions></GlobalActions>
            </TopNav>
            <TopActionPanel onSliderChange = {(currVal) => this.handleSliderChange(currVal)}/>
            {this.props.children}
        </App>
    );
  }
}
