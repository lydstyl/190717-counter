import React, { Component } from "react";
import "./App.css";

function Counter(props) {
  return (
    <div className="counter" data-key={props.dataKey}>
      <div onClick={props.handler} className="remove">
        Remove
      </div>
      <div className="counterBox">
        <div>{props.name}</div>
        <div>{props.number}</div>
      </div>
    </div>
  );
}

export default class App extends Component {
  addNew(e) {
    const inputVal = document.querySelector("input").value;
    if (inputVal) {
      this.setState({
        counters: [...this.state.counters, { name: inputVal, number: 0 }]
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      counters: [{ name: "coco", number: 3 }]
    };
  }

  handler(someValue) {
    const index = someValue.target.parentNode.getAttribute("data-key");
    //const counters = [...this.state.counters];
    // this.setState({
    //   counters: counters.splice(index, 1)
    // });
    this.setState({
      counters: [{ name: "jojo", number: 3 }]
    });
  }

  render() {
    const counters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      const counter = this.state.counters[i].name;
      const number = this.state.counters[i].number;
      counters.push(
        <Counter
          handler={this.handler}
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
        <input type="text" maxLength="10" />
        <div className="new">New</div>
        <div
          onClick={e => {
            this.addNew(e);
          }}
        >
          <div>
            <br />
          </div>
        </div>
        {Counters}
      </div>
    );
  }
}
