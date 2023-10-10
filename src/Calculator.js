// Calculator.js
import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      result: '',
    };
  }

  handleDigitClick = (digit) => {
    this.setState((prevState) => ({
      display: prevState.display + digit,
    }));
  };

  handleOperationClick = (operation) => {
    this.setState((prevState) => ({
      display: prevState.display + operation,
    }));
  };

  handleEqualsClick = () => {
    try {
      const result = eval(this.state.display);
      this.setState({
        result: result.toString(),
      });
    } catch (error) {
      this.setState({
        result: 'Error',
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '',
      result: '',
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} result={this.state.result} />
        <div className="buttons">
          <div className="button-row">
            <button onClick={() => this.handleDigitClick('7')}>7</button>
            <button onClick={() => this.handleDigitClick('8')}>8</button>
            <button onClick={() => this.handleDigitClick('9')}>9</button>
            <button onClick={() => this.handleOperationClick('+')}>+</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleDigitClick('4')}>4</button>
            <button onClick={() => this.handleDigitClick('5')}>5</button>
            <button onClick={() => this.handleDigitClick('6')}>6</button>
            <button onClick={() => this.handleOperationClick('-')}>-</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleDigitClick('1')}>1</button>
            <button onClick={() => this.handleDigitClick('2')}>2</button>
            <button onClick={() => this.handleDigitClick('3')}>3</button>
            <button onClick={() => this.handleOperationClick('*')}>X</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleDigitClick('0')}>0</button>
            <button onClick={this.handleClearClick}>C</button>
            <button onClick={this.handleEqualsClick}>=</button>
            <button onClick={() => this.handleOperationClick('/')}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
