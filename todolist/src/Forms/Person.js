import React, { Component } from 'react';

class Person extends Component {

    constructor() {
        super();

        this.state = {
            formula: "",
            email: "",
            apellido: "",
            numero: "",

            errors:{
                formula: false,
                apellido: false
            }
            
        }
        
    }
handleOnChange = e => {
    const{target:{value, name}} = e;
    this.setState({[name]:value

        
    
    })
console.log(value);
    

}
handleOnSubmit = e => {
    e.preventDefault();
    const{formula, email, numero, apellido} = this.state;
    this.setState({
       errors: {formula: formula === '', 
              apellido: apellido === '',
    }
    })
    if (formula.trim() && apellido.trim()) {
const data = {
    formula,
    email,
    numero,
    apellido
};
console.log('Data:',data);
}

}



    render() {
        return (
            <div className = "Person"> 
                <p>Nombre</p>
                <from onSubmit={this.handleOnSubmit}>
               <input
               name = "formula"
               type="text"
               value={this.state.formula}
               onChange={this.handleOnChange}
               className = {
                   this.state.formula ? 'errors': ''
               }
               />
               {this.state.errors.formula
               && 
               <div className = "errorMessage">Required</div>
               }
               <div>    
            <center><p>Apellido</p></center>
              <input
              name="apellido"
              type="text"
              value={this.state.apellido}
              onChange={this.handleOnChange}
              /></div>
              <div>    
            <center><p>Email</p></center>
              <input
              name = "email"
              type="text"
              value={this.state.email}
              onChange={this.handleOnChange}
              /></div>
              <div>    
            <center><p>Telefono</p></center>
              <input
              name = "numero"
              type="number"
              value={this.state.numero}
              onChange={this.handleOnChange}
              /></div>
        
              <center><input type="submit"
              
              /></center>
              </from>
            </div>
            
        );
    }
}

export default Person