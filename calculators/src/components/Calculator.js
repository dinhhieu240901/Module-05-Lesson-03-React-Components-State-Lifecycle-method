import React, { Component } from "react";
import "../index.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, result: 0 };
  }

  handleNum1Change = (event) => {
    this.setState({ num1: Number(event.target.value) });
  };

  handleNum2Change = (event) => {
    this.setState({ num2: Number(event.target.value) });
  };

  calculateNumbers = (operation) => {
    switch (operation) {
      case "+":
        this.setState({ result: this.state.num1 + this.state.num2 });
        break;
      case "-":
        this.setState({ result: this.state.num1 - this.state.num2 });
        break;
      case "*":
        this.setState({ result: this.state.num1 * this.state.num2 });
        break;
      case "/":
        this.setState({ result: this.state.num1 / this.state.num2 });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.num1}
          onChange={this.handleNum1Change}
        />
        <input
          type="number"
          value={this.state.num2}
          onChange={this.handleNum2Change}
        />
        <button onClick={() => this.calculateNumbers("+")}>+</button>
        <button onClick={() => this.calculateNumbers("-")}>-</button>
        <button onClick={() => this.calculateNumbers("*")}>*</button>
        <button onClick={() => this.calculateNumbers("/")}>/</button>
        <p>Kết quả: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
