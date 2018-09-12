import React, { Component } from 'react';
import Box from './Box';

class TestField extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Box text='Box 1' bgColor='red' />
        <Box text='Box 2' bgColor='green' />
        <Box text='Box 3' bgColor='blue' />
        <Box text='Box 4' bgColor='yellow' />
      </div>
    );
  }
}

export default TestField;