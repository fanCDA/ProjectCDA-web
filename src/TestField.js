import React, { Component } from 'react';
import Box from './Box';
import DraggableBox from './DraggableBox';

const DATA = [
  { text: 'Box 1', bgColor: 'red' },
  { text: 'Box 2', bgColor: 'green' },
  { text: 'Box 3', bgColor: 'blue' },
  { text: 'Box 4', bgColor: 'yellow' },
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
          {this.generateDraggableBoxes()}
        </div>
        <div style={{ display: 'flex' }}>
          {this.generateBoxes()}
        </div>
      </div>
    );
  }

  generateDraggableBoxes() {
    return this.state.data.map(({ text, bgColor }, index) => (
      <DraggableBox
        key={index}
        text={text}
        bgColor={bgColor}
      />
    ));
  }

  generateBoxes() {
    return this.state.data.map(({ text, bgColor }, index) => (
      <Box
        key={index}
        text={text}
        bgColor={bgColor}
      />
    ));
  }
}

export default TestField;