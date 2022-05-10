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
            dollars: Number(e.target.value)
        });
    }
    shouldComponentUpdate(props, state) {
        if(state.dollars % 10 === 0){
            return true;
        }
        return false;
        //return !(state.dollars % 10);
        //return state.dollars % 10 === 0;
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
       <font color="orange"><p className="Dollar">Monedas = <strong>{this.state.dollars/10}</strong>.coins</p></font>
       <form onSubmit={this.handleOnSubmit}>
            <input
            placeholder='0'
             onChange={this.handleOnChange}
             type="number"
            />
        </form>
        

        <font color="red"><p className="Mensaje">Precio de la Crypto moneda 10 Dolares</p></font>
        
   </div>
    
  );

}

}
export default Crypto;











