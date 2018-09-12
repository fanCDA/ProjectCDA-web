import React, { Component } from 'react';
import Box from './Box';
import DraggableBox from './DraggableBox';

class TestField extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <DraggableBox text='Box 1' bgColor='red' />
          <DraggableBox text='Box 2' bgColor='green' />
          <DraggableBox text='Box 3' bgColor='blue' />
          <DraggableBox text='Box 4' bgColor='yellow' />
        </div>
        <div style={{ display: 'flex' }}>
          <Box text='Box 1' bgColor='red' />
          <Box text='Box 2' bgColor='green' />
          <Box text='Box 3' bgColor='blue' />
          <Box text='Box 4' bgColor='yellow' />
        </div>
      </div>
    );
  }
}

export default TestField;