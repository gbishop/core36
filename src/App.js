import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

var words = [
  'like',
  'want',
  'get',
  'make',
  'good',
  'more',
  'not',
  'go',
  'look',
  'turn',
  'help',
  'different',
  'I',
  'he',
  'open',
  'do',
  'put',
  'same',
  'you',
  'she',
  'that',
  'up',
  'all',
  'some',
  'it',
  'here',
  'in',
  'on',
  'can',
  'finish',
  'where',
  'what',
  'why',
  'who',
  'when',
  'stop'
];
console.log(words);

class App extends Component {
  render() {
    const store = this.props.store;
    var perpage = store.rows * store.cols;
    var npages = Math.ceil(words.length / perpage);
    console.log('npages', npages);
    var offset = (store.page - 1) * perpage;
    var symbols = [];
    var showback = store.page > 1 ? 1 : 0;
    var shownext = store.page <= npages ? 1 : 0;
    var w = 100 / store.cols;
    var h = 100 / store.rows;
    var style = { width: `${w}%`, height: `${h}%` };
    for (var r = 0; r < store.rows; r++) {
      for (var c = 0; c < store.cols; c++) {
        var i = r * store.cols + c + offset;
        if (i < words.length) {
          symbols.push(
            <button key={words[i]} className="symbol" style={style}>
              <div>
                <h1>{words[i]}</h1>
                <img src={process.env.PUBLIC_URL + `/symbols/${words[i]}.png`} alt={words[i]} />
              </div>
            </button>);
        }
      }
    }
    return (
      <div className="App">
        {showback>0 && <button className="nav" >Back</button>}
        <div className="symbols">
          {symbols}
        </div>
        {shownext>0 && <button className="nav" >Next</button>}
      </div>
    );
  }
}

export default observer(App);
