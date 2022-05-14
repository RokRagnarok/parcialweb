import React, { Component } from 'react';
import './Anim.css'
class Anim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    componentDidUpdate(newProps, newState) {
     if(!newState.show){
        document.getElementById('fade').style = 'opacity: 1';
     }else{
         document.getElementById('fade').style = 'opacity: 0';
     }

    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show
        
        })
    }
   
    render() {
        return (
            <div className="Anim">
                <button onClick={this.toggleCollapse}>
                    {this.state.show ? 'Collapse' : 'Expand'}
                    
                </button>
                <div
                id="fade"
                className = {this.state.show? 'transition show': 'transition'}
                >
                 Hola
                </div>
            </div>
        );
    }

}
export default Anim;