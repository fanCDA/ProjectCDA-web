import React, { Component } from 'react';
import './App2.css';

class App extends Component {
  render() {
    let items = [];
    for(let i=0; i<50; i++) {
      items.push(
        <div className="grid-item" key={i}>{i+1}</div>
      );
    }
    return (
      <div className="grid-container">
        {items}
      </div>
    );
  }
}

export default App;