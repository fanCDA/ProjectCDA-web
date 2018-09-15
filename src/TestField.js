import React, { Component } from 'react';
import DraggableBox from './DraggableBox';

const DATA = [
  { text: 'Box 0', bgColor: 'red' },
  { text: 'Box 1', bgColor: 'green' },
  { text: 'Box 2', bgColor: 'blue' },
  { text: 'Box 3', bgColor: 'yellow' },
  { text: 'Box 4', bgColor: 'purple' },
  { text: 'Box 5', bgColor: 'pink' },
  { text: 'Box 6', bgColor: 'gray' },
];

class TestField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    }
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {this._generateDraggableBoxes()}
        </div>
      </div>
    );
  }

  _generateDraggableBoxes() {
    return this.state.data.map(({ text, bgColor }, index) => (
      <DraggableBox
        key={index}
        index={index}
        text={text}
        bgColor={bgColor}
        onDrop={item => this._handleDrop(index, item)}
      />
    ));
  }

  _handleDrop(dest_index, item) {
    const { index } = item;
    let newData = this.state.data.concat();
    newData[index] = this.state.data[dest_index];
    newData[dest_index] = this.state.data[index];

    this.setState({
      data: newData
    });
  }
}

export default TestField;