import React from 'react';
import './main.styl'
import * as styles from '!style!css!stylus!../../../css/font-awesome.css';
import {App, TopNav, Brand, NavItems} from 'js/components/navigation/navigation';
import {GlobalActions} from 'js/components/navigation/global-actions';
import {renderRoutes} from 'js/components/main-routes/main-routes';


export default class MainPage extends React.Component {
  constructor (props) {
    super(props)
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
            {this.props.children}
        </App>
    );
  }
}
