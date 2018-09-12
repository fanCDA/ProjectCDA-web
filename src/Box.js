import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div
        className="Box"
        style={{
          ...this.props.style,
          backgroundColor: this.props.bgColor,
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Box;