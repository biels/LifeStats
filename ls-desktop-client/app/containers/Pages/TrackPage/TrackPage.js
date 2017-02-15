// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './TrackPage.css';
import { Button } from 'semantic-ui-react'
import TimeTypeSelector from './components/TimeTypeSelector/TimeTypeSelector'


export default class TrackPage extends Component {

  constructor(props) {
    super(props)
    this.handleTypeChanged = this.handleTypeChanged.bind(this);
  }

  handleTypeChanged(){
    //Dispatch action
    console.log("Type changed")
  }
  render() {
    let types = [{name: "Type1"}, {name: "Type2"}];
    return (
      <div>
        Start track
        <div className={styles.container}>
          <h1>Track Page</h1>
        </div>
        <TimeTypeSelector timeTypes={types} selectedTimeType={0} onTypeChanged={this.handleTypeChanged}/>
        end track
      </div>
    );
  }
}
//Map state to props
