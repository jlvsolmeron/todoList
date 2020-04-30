import React, {Component} from 'react';
import axios from 'axios';


class Table extends Component {
    state = {
        todos: [],
    };
    componentDidMount(){
        axios.get('http://localhost:5001/todos')
            .then(res=> {
                console.log(res);
                this.setState({todos: res.data});
            })
            .catch(function(err){
                console.log('failed');
            })
    }
    componentDidUpdate() {
        axios.get('http://localhost:5001/todos')
            .then(res => {
                this.setState({todos: res.data});
            })
    }

    display(){        
        if(this.state.todos.length === 0){
            return <h1>No To-Do List</h1>
        }
        else{
            return(
            <>
                {this.state.todos.map(todo =>                                
                    <tr>                                                        
                        <td className="table-light">{todo.info}</td>                                                
                        <td className="table-light">
                            <button className={todo.status ? 'btn btn-success disabled' : 'btn btn-danger'} key={todo._id} onClick={e => this.changeStatus(todo._id)}>{todo.status}</button></td>               
                    </tr>
                )}            
            </>
            )
        }
    }
    changeStatus(e){
        for(var i = 0; i < this.state.todos.length; i++){
            if(this.state.todos[i]._id === e){
                const stat = {
                    _id: this.state.todos[i]._id,
                    status: true
                }
                
                axios.post('http://localhost:5001/todos/update', stat)
                   .then(res => console.log(res.data));
            }
            else
                continue;
        }        
    }

    render(){
        return (            
                <div className="mt-3">
                    <table className="table table-hover table-bordered">                
                        <thead>
                            <tr>                        
                                <th className="table-primary">Information</th>
                                <th className="table-primary">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.display()}
                        </tbody>
                    </table>
                </div>            
        )
    }
        
    
}

export default Table;
