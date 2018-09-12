import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import Box from './Box';

class DraggableBox extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <Box
          text={this.props.text}
          bgColor={this.props.bgColor}
          style={{opacity: isDragging ? 0.5 : 1}}
        />
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
)(DraggableBox);