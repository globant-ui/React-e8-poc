import React from 'react'
import * as styles from '!style!css!stylus!./navigation.styl';
import { Link } from 'react-router'

export const TopNav = (props)=>{
  return <header className='sl-navigation-bar'>
    {props.children}
  </header>
}


export const Brand = (props) => {
    const { title } = props;
    return <div className='sl-brand'><Link to="/" className="logo">
        {title}
    </Link></div>;
};

export const NavItems = (props)=>{
  return <div className='sl-navigation-menu'>
      <nav>
        {props.children}
      </nav>
  </div>
}

export const Nav =(props)=>{
  return <li className='sl-navigation-item'>
    <div className='sl-nav-content'>
      <Link activeStyle={{'backgroundColor' : '#e6e6e6', 'color' :'#666' , 'border': "1px solid #e6e6e6"}}to={props.url}>{props.label}</Link>
    </div>
  </li>
}



export const App = (props) => {
    return <div className="sl-app-wrapper">{props.children}</div>;
};
