import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

bindActionCreators, connect;

class Thinc extends Component {
  render() {
    let {name, activeTab, classes} = this.props;

    if (name === activeTab) {
      classes += ' active';
    }

    return (
      <div className={classes} role="tabpanel">
        <div className="tab-content">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Thinc;
