// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import styles from './TrackPage.css';
import { Button } from 'semantic-ui-react'
import TimeTypeSelector from './components/TimeTypeSelector/TimeTypeSelector'
import * as typesActions from '../../../actions/typesActions'

class TrackPage extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    var types = this.props.types;
    return (
      <div>
        Start track
        <div className={styles.container}>
          <h1>Track Page</h1>
        </div>
        <TimeTypeSelector timeTypes={types} selectedTimeType={0} onTypeChanged={this.props.handleSelectedTypeChanged}/>
        <Button onClick={this.props.handleFetch} loading={this.props.types.fetching}>Fetch</Button>
        end track
      </div>
    );
  }
}
//Map state to props
const mapStateToProps = (state) => ({
  types: state.types
});
const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(typesActions, dispatch)
  handleFetch: () => {
    dispatch(typesActions.loadTypes())
  },
  handleSelectedTypeChanged: (index) => {
    dispatch(typesActions.typeSelected(index))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPage)
