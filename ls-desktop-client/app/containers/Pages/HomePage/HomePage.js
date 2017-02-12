// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HomePage.css';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Home Page</h1>
        </div>
      </div>
    );
  }
}
