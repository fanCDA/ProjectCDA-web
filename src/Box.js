import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="column">
        <header>{this.props.header}</header>
      </div>
    );
  }
}

export default Box;