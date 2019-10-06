import React, { Component } from 'react';

import Counter from './components/Counter';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      counters: []
    };
  }

  generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };

  addNew(e) {
    const inputVal = this.state.inputText;
    if (inputVal) {
      this.setState({
        counters: [
          ...this.state.counters,
          { dataKey: this.generateKey(inputVal), name: inputVal, number: 0 }
        ],
        inputText: ''
      });
    }
  }

  delete = e => {
    const dataKey = e.target.parentNode.getAttribute('data-key');
    this.setState({
      counters: this.state.counters.filter((current, i) => {
        return current.dataKey !== dataKey;
      })
    });
  };

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  increase = e => {
    const dataKey = e.target.parentNode.parentNode.getAttribute('data-key');
    this.setState({
      counters: this.state.counters.map(counter => {
        if (dataKey === counter.dataKey) {
          return { ...counter, number: counter.number + 1 };
        } else {
          return counter;
        }
      })
    });
  };

  decrease = e => {
    const dataKey = e.target.parentNode.parentNode.getAttribute('data-key');
    this.setState({
      counters: this.state.counters.map(counter => {
        if (dataKey === counter.dataKey) {
          return { ...counter, number: counter.number - 1 };
        } else {
          return counter;
        }
      })
    });
  };

  render() {
    const counters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      const counter = this.state.counters[i].name;
      const number = this.state.counters[i].number;
      counters.push(
        <Counter
          handler={e => this.delete(e)}
          increase={e => this.increase(e)}
          decrease={e => this.decrease(e)}
          key={i + counter}
          dataKey={this.state.counters[i].dataKey}
          name={counter}
          number={number}
        />
      );
    }
    const Counters = <div className='counters'>{counters}</div>;

    return (
      <div className='App'>
        <h1>Counter</h1>
        <input
          type='text'
          maxLength='10'
          value={this.state.inputText}
          onChange={e => this.handleChange(e)}
        />
        <div className='button new' onClick={e => this.addNew(e)}>
          New
        </div>

        {Counters}
      </div>
    );
  }
}
