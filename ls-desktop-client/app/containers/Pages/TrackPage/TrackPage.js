// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as typesActions from '../../../actions/typesActions';
import { Link } from 'react-router';
import styles from './TrackPage.css';
import { Button } from 'semantic-ui-react'
import TimeTypeSelector from './components/TimeTypeSelector/TimeTypeSelector'


class TrackPage extends Component {

  constructor(props) {
    super(props)
    this.handleTypeChanged = this.handleTypeChanged.bind(this);
    this.handleFetchButtonClick = this.handleFetchButtonClick.bind(this);
  }

  handleTypeChanged(){
    //Dispatch action
    console.log("Type changed")
  }
  handleFetchButtonClick(){
    console.log("Fetching...")
    this.props.dispatch(typesActions.loadTypes())
  }
  render() {
    let types = [{id:0, name: "Type1"}, {id: 1, name: "Type2"}];
    types = this.props.types;
    return (
      <div>
        Start track
        <div className={styles.container}>
          <h1>Track Page</h1>
        </div>
        <TimeTypeSelector timeTypes={types} selectedTimeType={0} onTypeChanged={this.handleTypeChanged}/>
        <Button onClick={this.handleFetchButtonClick}>Fetch</Button>
        end track
      </div>
    );
  }
}
//Map state to props
const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(typesActions, dispatch)
  dispatch
});

export default connect(mapStateToProps)(TrackPage)
