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


const dragSource = {
  beginDrag(props) {
    console.log('Begin drag');
    return {};
  }
};

const dropTarget = {
  drop(props, monitor) {
    console.log('Drop');
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