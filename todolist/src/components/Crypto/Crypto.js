import React, { Component } from 'react';
import './Crypto.css'
class Crypto extends Component {
    constructor() {
        super();

        this.state = {
            dollars: 0,
        }
    }
    handleOnChange = e => {
        const {target:{value}} = e;

        this.setState({
            dollars: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
     if(this.state.dollars.trim() === '') {
         this.setState
         ({
              dollars: 
               [
                ...this.state.dollars,
                {
                    dollars: this.state.dollars,
                    
                }


               ]
            

        })
     }

    }
  render() {
   return (
   <div className="Crypto">
       <font color="blue"><h1 className="title">Crypto Coins</h1></font>
       <font color="orange"><p className="Dollar">Dolares a invertir</p></font>
       <form onSubmit={this.handleOnSubmit}>
            <input
                type = "number"
                value = {this.state.dollars}
                onChange = {this.handleOnChange}
            />
        </form>
        

        <font color="red"><p>Precio de la Crypto moneda 10 Dolares</p></font>
        
   </div>
    
  );

}

}
export default Crypto;











