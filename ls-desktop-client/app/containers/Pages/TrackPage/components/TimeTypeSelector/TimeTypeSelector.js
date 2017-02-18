// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './TimeTypeSelector.css';
import { Button } from 'semantic-ui-react'
//import { Loader } from 'halogen/PulseLoader'
var Loader = require('halogen/BounceLoader');

//{this.props.timeTypes.fetching && <Loader color="#26A65B" size="128px" margin="4px"/>}
export default class TrackPage extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(i, evt){
    this.props.onTypeChanged(i);
  }
  render() {
    let buttonList = this.props.timeTypes.types.map((timeType, i) => {
      const isThis = this.props.timeTypes.selectedIndex == i;
      var color = isThis ? 'teal' : 'grey';
      return <Button key={i} onClick={this.handleButtonClick.bind(this, i)} color={color}>{timeType.name}</Button>;
    })
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
  timeTypes: React.PropTypes.object,
  selectedTimeType: React.PropTypes.number,
  onTypeChanged: React.PropTypes.func
}
