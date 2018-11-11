import React, { Component } from 'react';
import DATA from'./data/model';
import './App2.css';

class App extends Component {
  render() {
    // let items = [];
    // for(let i=0; i<50; i++) {
    //   items.push( this.getItem(i) );
    // }
    return (
      <div className="grid-container">
        { DATA.Podwojne.map((data, index) => this.getPodwojnaStrona(data, index)) }
      </div>
    );
  }

  getPodwojnaStrona(data, indexPodwojnej) {
    return (
      <div className="grid-item" key={data.id}>
        <div className="grid-container-2">
          <div className="grid-item-2">
            {this.getPojedynczaStrona(data.Strony[0], indexPodwojnej, 0)}
          </div>
          <div className="grid-item-2">
            {this.getPojedynczaStrona(data.Strony[1], indexPodwojnej, 1)}
          </div>
        </div>
      </div>
    );
  }

  getPojedynczaStrona(data, indexPodwojnej, indexPojedynczej) {
    // console.log(data);
    return(
      <div className="single-page-container">
        { data.CzesciStrony.map((data, index) => this.getCzescStrony(data, indexPodwojnej, indexPojedynczej, index)) }
      </div>
    );
  }

  getCzescStrony(data, indexPodwojnej, indexPojedynczej, indexCzesci) {
    // console.log(data, indexPodwojnej, indexPojedynczej, indexCzesci);
    return (
      <div
        key={`${indexPodwojnej},${indexPojedynczej},${indexCzesci}`}
        style={{
          flex: 1,
          backgroundColor: this.getBgColor(data.bg)
        }}
      >
        {data.text}
      </div>
    );
  }

  getBgColor(i) {
    switch(i) {
      case 0:
        return'orange';
      case 1:
        return'yellow';
      case 2:
        return'pink';
      case 3:
        return'blue';
      default:
        return'green';
    }
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