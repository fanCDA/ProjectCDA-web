import React, { Component } from 'react';
import { DropTarget, DragSource } from 'react-dnd';
import Box from './Box';

class DraggableBox extends Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging } = this.props;
    return connectDragSource(
      connectDropTarget(
        <div>
          <Box
            text={this.props.text}
            bgColor={this.props.bgColor}
            style={{opacity: isDragging ? 0.5 : 1}}
          />
        </div>
      )
    );
  }
}


const dropTarget = {
  drop(props, monitor, component) {
    props.onDrop(monitor.getItem())
  }
};

const dragSource = {
  beginDrag(props) {
    return { index: props.index };
  }
};

DraggableBox = DragSource(
  'Tmp.Box',
  dragSource,
  (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
  })
)(DraggableBox);

DraggableBox = DropTarget(
  'Tmp.Box',
  dropTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  })
)(DraggableBox);

export default DraggableBox;