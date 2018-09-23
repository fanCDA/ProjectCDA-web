import React, { Component } from 'react';
import Box from './Box';
import './DraggableBox.css';

class DraggableBox extends Component {
  render() {
    return (
      <div
        draggable="true"
        onDragStart={e => this.handleDragStart(e)}
        onDragEnter={e => this.handleDragEnter(e)}
        onDragOver={e => this.handleDragOver(e)}
        onDragLeave={e => this.handleDragLeave(e)}
        onDrop={e => this.handleOnDrop(e)}
        onDragEnd={e => this.handleOnDragEnd(e)}
      >
        <Box header={this.props.header} />
      </div>
    );
  }

  handleDragStart(e) {
    // this / e.target is the source node.
    console.log('handleDragStart');
    // console.log(e);

    e.target.style.opacity = 0.4;
    localStorage.dragSource = 'Start the fun';
  }

  handleDragEnter(e) {
    // this / e.target is the current hover target.
    console.log('handleDragEnter');
    // console.log(e);

    e.target.classList.add('over');
  }

  handleDragOver(e) {
    console.log('handleDragOver');
    // console.log(e);

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  handleDragLeave(e) {
    // this / e.target is previous target element.
    console.log('handleDragLeave');
    // console.log(e);

    e.target.classList.remove('over');
  }

  handleOnDrop(e) {
    // this / e.target is current target element.
    console.log('handleOnDrop');
    // console.log(e);

    e.preventDefault();
    e.target.classList.remove('over');

    var data = localStorage.dragSource;
    console.log(data);
    localStorage.dropTarget = 'MidWay';

    return false;
  }

  handleOnDragEnd(e) {
    // this/e.target is the source node.
    console.log('handleOnDragEnd');
    // console.log(e);

    e.target.style.opacity = 1;

    var data = localStorage.dropTarget;
    console.log(data);

    localStorage.clear();
  }
}

export default DraggableBox;