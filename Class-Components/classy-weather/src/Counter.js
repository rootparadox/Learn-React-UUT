import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // Call & apply & bind method
    this.state = { counter: 9 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currentCounter) => {
      return { counter: currentCounter.counter - 1 };
    });
  }
  handleIncrement() {
    this.setState((currentCounter) => {
      return { counter: currentCounter.counter + 1 };
    });
  }

  render() {
    const date = new Date("June 22 2026");
    date.setDate(date.getDate() + this.state.counter);
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>
          {date.toDateString()} [{this.state.counter}]
        </span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
