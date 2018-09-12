import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TestField from './TestField';

class App extends Component {
  render() {
    return <TestField />;
  }
}

export default DragDropContext(HTML5Backend)(App);