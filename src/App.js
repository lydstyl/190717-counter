import React, { Component } from "react";
import "./App.css";

function Counter(props) {
  return <div className="counter">{props.name}</div>;
}

export default class App extends Component {
  addNew(e) {
    const inputVal = document.querySelector("input").value;
    if (inputVal) {
      this.setState({ counters: [...this.state.counters, inputVal] });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      counters: ["deja là", "one", "tow"]
    };
  }

  render() {
    const counters = [];
    for (let i = 0; i < this.state.counters.length; i++) {
      const counter = this.state.counters[i];
      counters.push(<Counter key={i} name={counter} />);
    }
    const Counters = <div className="counters">{counters}</div>;

    return (
      <div className="App">
        <h1>Counter</h1>
        <input type="text" maxlength="10" />
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
