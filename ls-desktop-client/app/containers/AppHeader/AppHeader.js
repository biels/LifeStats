// @flow
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styles from './AppHeader.css'
import * as loginActions from '../../actions/loginActions'

class AppHeader extends Component {
  componentDidMount(){
    this.props.handleStartup();
  }
  render() {
    let loginText = 'Login';
    if(this.props.session.loggedIn){
      loginText = 'Logged in as ' + this.props.session.user.name;
    }
    if(this.props.session.loginInProgress) loginText = "Logging in..."
    return (
      <div className={styles.container}>
        <div>

        </div>
        <Button className={styles.loginButton} onClick={this.props.handleLoginClick}>{loginText}</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginClick: () => {
      dispatch(loginActions.requestLoginAuto())
    },
    handleStartup: () => {
      dispatch(loginActions.setLoginInfo("biel", "1234"))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
