import React, { Component } from 'react';
import './App2.css';

class App extends Component {
  render() {
    let items = [];
    for(let i=0; i<50; i++) {
      items.push( this.getItem(i) );
    }
    return (
      <div className="grid-container">
        {items}
      </div>
    );
  }

  getItem(i) {
    return (
      <div className="grid-item" key={i}>
        <div className="grid-container-2">
          <div className="grid-item-2">L</div>
          <div className="grid-item-2">R</div>
        </div>
      </div>
    );
  }
}

export default App;