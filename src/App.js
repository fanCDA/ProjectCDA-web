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
              data={value}
              swapHandler={this.swap}
              setData={this.setData}
            />
          )
        })}
      </div>
    );
  }

  swap = (srcIndex, destIndex) => {
    console.log(`swap: ${srcIndex} => ${destIndex}`);
    let newData = this.state.data.concat();
    newData[srcIndex] = this.state.data[destIndex];
    newData[destIndex] = this.state.data[srcIndex];

    this.setState({
      data: newData
    });
  }

  setData = (index, data) => {
    console.log(`set ${index} with: ${data}`);
    let newData = this.state.data.concat();
    newData[index] = data;

    this.setState({
      data: newData
    });
  }
}

export default App;