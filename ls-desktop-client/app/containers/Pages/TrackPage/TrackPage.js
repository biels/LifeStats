// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './TrackPage.css';


export default class TrackPage extends Component {
  render() {
    return (
      <div>
        Start track
        <div className={styles.container}>
          <h1>Track Page</h1>
        </div>
        end track
      </div>
    );
  }
}
