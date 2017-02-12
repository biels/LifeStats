// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './PageTemplate.css';


export default class PageTemplate extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          Hi{this.props.children}
        </div>
      </div>
    );
  }
}
