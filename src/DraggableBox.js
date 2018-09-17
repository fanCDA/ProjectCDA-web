import React, { Component } from 'react';
import { DropTarget, DragSource } from 'react-dnd';
import Box from './Box';
import BoxModal from './BoxModal';

class DraggableBox extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      isModalOpen: false
    }
  }

  render() {
    const { connectDragSource, connectDropTarget, isDragging, isOver, canDrop } = this.props;
    const { isModalOpen } = this.state;
    console.log('Show modal? ' + isModalOpen);
    let bgColor = this.props.bgColor;

    if (isOver && canDrop) {
      bgColor = 'rgb(166, 202, 240)';
    }

    return connectDragSource(
      connectDropTarget(
        <div>
          <div
            ref={this.myRef}
            onClick={event => this._handleClick(event)}
          >
            <Box
              text={this.props.text}
              bgColor={bgColor}
              style={{opacity: isDragging ? 0.5 : 1}}
            />
          </div>
          <BoxModal
            isOpen={isModalOpen}
            // cardElement={this.ref}
            cardElement={this.myRef.current}
            // card={card}
            card={{text: this.props.text}}
            // listId={listId}
            toggleCardEditor={this._toggleCardEditor}
            handleTextChange={this._handleTextChange}
          />
        </div>
      )
    );
  }

  _handleClick(event) {
    console.log('CLICK!');
    console.log(event);
    this._toggleCardEditor();
  }

  _toggleCardEditor = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  _handleTextChange = (newText) => {
    this.props.onTextUpdate(newText);
  };
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
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(DraggableBox);

export default DraggableBox;