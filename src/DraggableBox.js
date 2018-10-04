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
    e.dataTransfer.setData('sourceIndex', this.props.index);
    localStorage.dragSource = 'Start the fun';

    sessionStorage.setItem('dragState', 'DRAGGING');
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

    if (sessionStorage.dragState === 'DRAGGING') {
      console.log('-={ Same session }=-');
      let sourceIndex = parseInt(e.dataTransfer.getData('sourceIndex'), 10);
      if(sourceIndex === this.props.index) {
        console.log('-={ Same item. IGNORE! }=-');
      } else {
        console.log('-={ SWAP! }=-');
        this.props.swapHandler(sourceIndex, this.props.index);
      }
    } else {
      console.log('-={ Not the same session. Save data in localStorage }=-');
      localStorage.dropTarget = 'Pass me to 1st window';
    }

    return false;
  }

  handleOnDragEnd(e) {
    // this/e.target is the source node.
    console.log('handleOnDragEnd');
    // console.log(e);

    e.target.style.opacity = 1;
    
    if (localStorage.dropTarget) {
      console.log('-={ We have some data from other window }=-');

      var data = localStorage.dropTarget;
      console.log(data);

      localStorage.removeItem('dropTarget');
      // localStorage.clear();
    } else {
      console.log('-={ It was same session, we good here }=-');
    }

    sessionStorage.removeItem('dragState');
  }
}

export default DraggableBox;