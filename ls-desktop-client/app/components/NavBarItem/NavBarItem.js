// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavBarItem.css';


export default class NavBarItem extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  render() {
    const location = this.props.linkTo;
    const active = this.context.router.isActive(location);
    return (
      <Link to={location}>
        <div className={styles.edgeContainer}>
          <div className={styles.container}>
            {this.props.children}
            {active && " [X]"}

          </div>
        </div>

      </Link>

    );
  }
}
NavBarItem.PropTypes = {
  linkTo: React.PropTypes.string
}
NavBarItem.contextTypes = {
  router: React.PropTypes.object
}
