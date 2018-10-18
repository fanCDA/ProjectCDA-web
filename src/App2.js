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
          <div className="grid-item-2">
            {this.getSinglePage(i)}
          </div>
          <div className="grid-item-2">
            R
          </div>
        </div>
      </div>
    );
  }

  getSinglePage(i) {
    if(i === 1) {
      return (
        <div className="single-page-container">
          <div style={{flex: 1, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>2</div>
        </div>
      );
    } else if(i === 2) {
      return (
        <div className="single-page-container">
          <div style={{flex: 1, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>2</div>
          <div style={{flex: 1, backgroundColor: 'pink'}}>3</div>
        </div>
      );
    } else if(i === 3) {
      return (
        <div className="single-page-container">
          <div style={{flex: 1, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>2</div>
          <div style={{flex: 1, backgroundColor: 'pink'}}>3</div>
          <div style={{flex: 1, backgroundColor: 'brown'}}>4</div>
        </div>
      );
    } else if(i === 7) {
      return (
        <div className="single-page-container">
          <div style={{flex: 1, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 2, backgroundColor: 'yellow'}}>2</div>
        </div>
      );
    } else if(i === 8) {
      return (
        <div className="single-page-container">
          <div style={{flex: 2, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>2</div>
          <div style={{flex: 1, backgroundColor: 'pink'}}>3</div>
        </div>
      );
    } else if(i === 9) {
      return (
        <div className="single-page-container">
          <div style={{flex: 1, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 2, backgroundColor: 'yellow'}}>2</div>
          <div style={{flex: 1, backgroundColor: 'pink'}}>3</div>
        </div>
      );
    } else if(i === 10) {
      return (
        <div className="single-page-container">
          <div style={{flex: 2, backgroundColor: 'green'}}>1</div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>2</div>
          <div style={{flex: 2, backgroundColor: 'pink'}}>3</div>
        </div>
      );
    }
    
    return <div>L</div>;
  }
}

export default App;