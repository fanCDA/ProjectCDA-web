import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import './Box.css';

class Box extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        className="Box"
        style={{
          opacity: isDragging ? 0.5 : 1,
          backgroundColor: this.props.bgColor
        }}
      >
        {this.props.text}
      </div>
    );
  }
}


const dragSource = {
  beginDrag(props) {
    return {};
  }
};

export default DragSource(
  'Tmp.Box',
  dragSource,
  (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
  })
)(Box);