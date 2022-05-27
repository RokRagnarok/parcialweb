import React, { Component } from 'react';

class Calcula extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            selector: ''
        }
    }
    handleOnChange = e => {
        const{target: {value,name, type}} = e;
        const val = type === 'text'? Number(value): value;
        this.setState({
            [name]: val
    
        })
    }
    handleResult = e => {
        const{number1,number2, selector, } = this.state;
        this.setState({
            result: calculateResult(number1, number2, selector)
        })
    }
    render() {
        return (
            <div className="Calculator">
                <input
                onChange={this.handleOnChange}
                name = "number1"
                type="text"
                value={this.state.number1}
                />
                <select name = "selector" value={this.state.selector} onChange={this.handleOnChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">x</option>
          </select>
            
                <input
                onChange={this.handleOnChange}
                name = "number2"
                type="text"
                value={this.state.number2}
                />

                <p>
                    <button onClick={this.handleResult}>=</button>
                </p>
                <p className="result">{this.state.result}</p>
            </div>
        );
    }
}
function calculateResult(number1, number2, selector){
switch(selector){
case "+":
    return number1 + number2;
    case "/":
    return (number1 / number2).toFixed(2);
    break;
    case "*":
    return number1 * number2;
    break;
    case "-":
    return number1 - number2;
    break;
    
}
}
export default Calcula;