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
  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    }
  }

  render() {
    return (
      <div id="columns">
        {this.state.data.map((value, index) => {
          return (
            <DraggableBox
              key={index}
              index={index}
              header={value}
              swapHandler={this.swap}
            />
          )
        })}
      </div>
    );
  }

  swap = (srcIndx, destIndx) => {
    console.log(`swap: ${srcIndx} => ${destIndx}`);
    let newData = this.state.data.concat();
    newData[srcIndx] = this.state.data[destIndx];
    newData[destIndx] = this.state.data[srcIndx];

    this.setState({
      data: newData
    });
  }
}

export default App;