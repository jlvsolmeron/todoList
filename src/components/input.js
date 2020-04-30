import React, { Component } from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Input extends Component {        
    value = 'hello';

    state = {
        input: [{info: ""}],        
    }


    InputInfo = (props) => {
        return (
            props.input.map((val, idx) => {
                let inputId = 'todoinput-${idx}'
                return (
                    <div className="form-group" key={idx}>
                        <div className="form-group">
                            <div className="input-group mb-3">                                    
                                <input type="text" class="form-control" name={inputId} data-id={idx} id={inputId} value={props.input[idx]}></input>            
                            </div>
                        </div>
                    </div> 
                )
            })
        )
    }
    
    handleChange = (e, index) => {
        this.state.input[index] = e.target.value
        this.setState({input: this.state.input})
        console.log(this.state.input)
    
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
            {
                input.map((val, idx) => {
                let inputId = 'todoinput-${idx}'
                    return (
                        <div className="form-group" key={idx}>
                            <div className="form-group">
                                <div className="input-group mb-3">                                    
                                    <input type="text" className="form-control" name={inputId} data-id={idx} id={inputId}></input>            
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <button className="btn btn-primary addList my-3" onClick={this.addInput}><FontAwesomeIcon icon={faPlus} /></button>              
        </form>
      )
    }       
}

export default Input;
