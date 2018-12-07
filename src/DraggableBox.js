import React, { Component } from 'react';
import Box from './Box';
import './DraggableBox.css';

class DraggableBox extends Component {
  render() {
    const style = {};
    if (!this.props.isFirstOne) {
      style["borderTopWidth"] = 0;
    }
    return (
      <div
        draggable="true"
        onDragStart={e => this.handleDragStart(e)}
        onDragEnter={e => this.handleDragEnter(e)}
        onDragOver={e => this.handleDragOver(e)}
        onDragLeave={e => this.handleDragLeave(e)}
        onDrop={e => this.handleOnDrop(e)}
        onDragEnd={e => this.handleOnDragEnd(e)}
        style={{width: '100%', height: '100%'}}
      >
        <Box
          header={this.props.data.text}
          style={style}
        />
      </div>
    );
  }

  handleDragStart(e) {
    // this / e.target is the source node.
    console.log('handleDragStart', this.props.index);
    // console.log(e);

    e.target.style.opacity = 0.4;
    e.dataTransfer.setData('sourceIndex', this.props.index);
    e.dataTransfer.setData('sourceData', JSON.stringify(this.props.data));
    // localStorage.dragSource = this.props.data;

    sessionStorage.setItem('dragState', 'DRAGGING');
  }

  handleDragEnter(e) {
    // this / e.target is the current hover target.
    console.log('handleDragEnter');
    // console.log(e);

    e.target.classList.add('over');
  }

  handleDragOver(e) {
    // console.log('handleDragOver');     // TMP out
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
    console.log('handleOnDrop', this.props.index);
    console.log(e);

    e.preventDefault();
    e.target.classList.remove('over');

    // var data = localStorage.dragSource;
    // console.log(data);

    if (sessionStorage.dragState === 'DRAGGING') {
      console.log('-={ Same session }=-');
      // let sourceIndex = parseInt(e.dataTransfer.getData('sourceIndex'), 10);  // For single digit index
      let sourceIndex = e.dataTransfer.getData('sourceIndex');
      if(sourceIndex === this.props.index) {
        console.log('-={ Same item. IGNORE! }=-');
      } else {
        console.log('-={ SWAP! }=-');
        this.props.swapHandler(sourceIndex, this.props.index);
      }
      sessionStorage.setItem('dragState', 'DROPPED');
    } else {
      console.log('-={ Not the same session. Save data in localStorage }=-');
      localStorage.dropData = JSON.stringify(this.props.data);
      console.log("Stored in local storage.");
      let sourceData = JSON.parse(e.dataTransfer.getData('sourceData'));
      console.log("sourceData:");
      console.log(sourceData);
      this.props.setData(this.props.index, sourceData);
    }

    return false;
  }

  handleOnDragEnd(e) {
    // this/e.target is the source node.
    console.log('handleOnDragEnd', this.props.index);
    console.log(e);
    console.log(sessionStorage.dragState);
    // console.log('sessionStorage.dragState => ' + sessionStorage.dragState);

    e.target.style.opacity = 1;

    if (sessionStorage.dragState === 'DROPPED') {
      console.log('-={ Was dropped, so should be same session }=-');
    } else {
      console.log(`-={ Could've been dropped in other window }=-`);
      setTimeout(() => {
        if (localStorage.dropData) {
          console.log('-={ We have some data from other window }=-');
    
          var dropData = JSON.parse(localStorage.dropData);
          console.log(dropData);
    
          this.props.setData(this.props.index, dropData);
    
          localStorage.removeItem('dropData');
          // localStorage.clear();
        } else {
          console.log('-={ Most likely outside the window, we good here }=-');
        }
      }, 250);
    }

    sessionStorage.removeItem('dragState');
  }
}

export default DraggableBox;