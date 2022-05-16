import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
         
    constructor(props) {
        super(props);
        this.state = {
           numbers: '',
            sum: [],
            resta: [],
            multiplication: [],
            divisor: [],
           results: []


        }

    }
    handleOnChange = e => {

    }
    handleNumberChange = e => {
        const {target: {value}} = e;
        const numbers = Array.from(value);
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);
        const resta = numbers.reduce((a, b) => Number(a) - Number(b), 0);
        const divisor = numbers.reduce((a, b) => Number(a)/ Number(b), 0);


        this.setState({
            numbers: value,
            results: [...this.state.results, result],
            resta: resta,
            divisor : divisor


        })
    }
    operation = e => {

    }


    render() {
        const {results} = this.state;
        return (

            <div className= "Calculator">
                
      
            <input
                type="number"
                value={this.state.numbers}
                onChange= {this.handleNumberChange}
            />
                  
          <select value={this.state.value} onChange={this.handleNumberChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">x</option>
          </select>
            <input type="number"
            value={this.state.numbers}
            onChange={this.handleNumberChange}
            />
             <ul>
                    {
                        results.map((result, i) => (
                            <results key={i} result={result}/>
                        ))
                    }
                </ul>
            <button 
            className = "opciones"
            onClick={this.handleNumberChange}>         
         comprobar
            </button>
            </div>
        

        
        );
        
    }
}

export default Calculator;