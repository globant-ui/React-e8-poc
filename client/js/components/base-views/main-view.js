import React from 'react';
import * as styles from '!style!css!stylus!./base-views.styl';

export const MainViewTpl = (props)=>{
  return <section className={styles.viewContent}>
      {props.children}
    </section>
}

export const MainViewHeader = (props)=>{
  return <h4 className={styles.viewHeader}>{props.header}</h4>
}
