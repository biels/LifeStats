// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavBar.css';


export default class NavBar extends Component {
  render() {
    return (
        <div className={styles.container}>
          {this.props.children}
          End of menu
        </div>
    );
  }
}
