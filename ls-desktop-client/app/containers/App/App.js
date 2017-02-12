// @flow
import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar'
import NavBarItem from '../../components/NavBarItem/NavBarItem'
import styles from './App.css'

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div className={styles.warp}>
        <div className={styles.floatleft}>
          <div className={styles.logo}>
            LifeStats
          </div>
          <NavBar>
            <NavBarItem linkTo="/home">Home</NavBarItem>
            <NavBarItem linkTo="/track">Track</NavBarItem>
            <NavBarItem linkTo="/stats">Stats</NavBarItem>
          </NavBar>
        </div>
        <div className={styles.floatright}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
