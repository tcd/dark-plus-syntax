// import React, { Component } from 'react';
import { Component } from 'react';

export class Folder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };
  }

  render() {
    return (
      <div className="folder">
        <div className="file-icon"></div>
        <span className="file-name"> {this.props.name} </span>
        <span className="file-info"> {this.props.info} </span>
      </div>
    );
  }

};

import React from 'react';

const Folder  = (props) => {
  const { name, info } = props;
  return (
    <div className="folder">
        <div className="file-icon"></div>
        <span className="file-name"> {name} </span>
        <span className="file-info"> {info} </span>
    </div>
  );
};

