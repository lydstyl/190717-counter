import React, { Component } from "react";
import "./App.css";

function Counter(props) {
  return (
    <div className="counter" data-key={props.dataKey}>
      <div onClick={props.handler} className="remove">
        Remove
      </div>
      <div className="counterBox" onClick={props.inCrease}>
        <div>{props.name}</div>
        <div>{props.number}</div>
      </div>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      counters: []
    };
  }

  addNew(e) {
    const inputVal = this.state.inputText;
    if (inputVal) {
      this.setState({
        counters: [...this.state.counters, { name: inputVal, number: 0 }],
        inputText: ''
      });
    }
  }

  handler = e => {
    
    const index = parseInt(e.target.parentNode.getAttribute("data-key"));
    this.setState({
      counters: this.state.counters.filter((current, i) => {
        return i !== index;
      })
    });
  };

  handleChange(e) {
    this.setState({inputText:e.target.value})
  }

  render() {
    const counters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      const counter = this.state.counters[i].name;
      const number = this.state.counters[i].number;
      counters.push(
        <Counter
          handler={e=>this.handler(e)}
          key={i}
          dataKey={i}
          name={counter}
          number={number}
        />
      );
    }
    const Counters = <div className="counters">{counters}</div>;

    return (
      <div className="App">
        <h1>Counter</h1>
        <input type="text" maxLength="10" value={this.state.inputText} onChange={e => this.handleChange(e)} />
        <div className="new" onClick={e => 
            this.addNew(e)
          }>New</div>
        
        {Counters}
      </div>
    );
  }
}
