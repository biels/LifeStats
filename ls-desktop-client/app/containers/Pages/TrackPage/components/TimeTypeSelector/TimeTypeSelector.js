// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './TimeTypeSelector.css';
import { Button } from 'semantic-ui-react'


export default class TrackPage extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(evt){
    //this.props.onTypeChanged();
  }
  render() {
    let buttonList = this.props.timeTypes.map(timeType => <Button onClick={this.handleButtonClick}>{timeType.name}</Button>)
    return (
      <div>
        Select type of time active:
        <Button.Group attached='top' vertical>
          {buttonList}
        </Button.Group>
      </div>
    );
  }
}
TrackPage.PropTypes = {
  timeTypes: React.PropTypes.array,
  selectedTimeType: React.PropTypes.number,
  onTypeChanged: React.PropTypes.func
}
