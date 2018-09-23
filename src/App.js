import React, { Component } from 'react';
import DraggableBox from './DraggableBox';

const DATA = [
  'A',
  'B',
  'C',
  'D',
  'E',
];

class App extends Component {
  render() {
    return (
      <div id="columns">
        {DATA.map((value, index) => {
          return (
            <DraggableBox
              key={index}
              header={value}
            />
          )
        })}
      </div>
    );
  }
}

export default App;