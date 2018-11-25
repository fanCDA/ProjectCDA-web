import React, { Component } from 'react';
import DraggableBox from './DraggableBox';
import DATA from'./data/model';
import './App2.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATA
    }
  }
  
  render() {
    // let items = [];
    // for(let i=0; i<50; i++) {
    //   items.push( this.getItem(i) );
    // }
    return (
      <div className="grid-container">
        { this.state.data.Podwojne.map((data, index) => this.getPodwojnaStrona(data, index)) }
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
    const key = `${indexPodwojnej},${indexPojedynczej},${indexCzesci}`;
    // console.log(data, indexPodwojnej, indexPojedynczej, indexCzesci);
    // return (
    //   <div
    //     key={`${indexPodwojnej},${indexPojedynczej},${indexCzesci}`}
    //     style={{
    //       flex: 1,
    //       backgroundColor: this.getBgColor(data.bg)
    //     }}
    //   >
    //     {data.text}
    //   </div>
    // );

    return (
      <DraggableBox
        key={key}
        index={key}
        data={data}
        swapHandler={(srcIndex, destIndex) => this.swapHandler(srcIndex, destIndex)}
        setData={(index, data) => this.setDataHandler(index, data)}
      />
    );
  }

  swapHandler(srcIndex, destIndex) {
    console.log(`swap: ${srcIndex} => ${destIndex}`);

    let [ srcIndexPodwojnej, srcIndexPojedynczej, srcIndexCzesci ] = srcIndex.split(',');
    let [ destIndexPodwojnej, destIndexPojedynczej, destIndexCzesci ] = destIndex.split(',');

    // Sorry, I know it's bad because it's actually mutating the state, but gonna deal with it after adding proper state management...
    let newPodwojne = this.state.data.Podwojne;
    let tmpDest = this.state.data.Podwojne[srcIndexPodwojnej].Strony[srcIndexPojedynczej].CzesciStrony[srcIndexCzesci];
    newPodwojne[srcIndexPodwojnej].Strony[srcIndexPojedynczej].CzesciStrony[srcIndexCzesci] = this.state.data.Podwojne[destIndexPodwojnej].Strony[destIndexPojedynczej].CzesciStrony[destIndexCzesci];
    newPodwojne[destIndexPodwojnej].Strony[destIndexPojedynczej].CzesciStrony[destIndexCzesci] = tmpDest;

    this.setState({
      data: {
        Podwojne: newPodwojne
      }
    });
  }

  setDataHandler(index, data) {
    console.log(`set ${index} with: ${data}`);
    let [ indexPodwojnej, indexPojedynczej, indexCzesci ] = index.split(',');
    let newPodwojne = this.state.data.Podwojne;
    newPodwojne[indexPodwojnej].Strony[indexPojedynczej].CzesciStrony[indexCzesci] = data;

    this.setState({
      data: {
        Podwojne: newPodwojne
      }
    });
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
          <div style={{flex: 1, backgroundColor: 'green'}}>
            <DraggableBox
              key={0}
              page={i}
              index={0}
              data={0}
              swapHandler={(srcIndex, destIndex) => console.log(`swap: ${srcIndex} => ${destIndex}`)}
              setData={(index, data) => console.log(`set ${index} with: ${data}`)}
            />
          </div>
          <div style={{flex: 1, backgroundColor: 'yellow'}}>
            <DraggableBox
              key={1}
              page={i}
              index={1}
              data={1}
              swapHandler={(srcIndex, destIndex) => console.log(`swap: ${srcIndex} => ${destIndex}`)}
              setData={(index, data) => console.log(`set ${index} with: ${data}`)}
            />
          </div>
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