import React, { Component } from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Input extends Component {    
    
    state = {
        input: [{info: ""}],
    }

    
    
    
    
    addInput = (e) => {
        this.setState((prevState) => ({
            input: [...prevState.input, {info:""}],
        }));
    }

    handleSubmit = (e) => {e.preventDefault()   
    console.log(this.state.input)
    }
    
  render() {
      let {input} = this.state
      return (
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>               
            
            <button className="btn btn-primary addList my-3" onClick={this.addInput}><FontAwesomeIcon icon={faPlus} /></button>  
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      )
    }       
}

export default Input;
