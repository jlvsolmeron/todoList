import React, {Component} from 'react';
import axios from 'axios';

class Table extends Component {
    state = {
        persons: [],
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=> {
                console.log(res);
                this.setState({persons: res.data});
            })
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
                            <>
                            {this.state.persons.map(person =>                                
                            <tr>                                                        
                                <td className="table-light">{person.name}</td>
                                <td className="table-light"><button className="btn btn-success">{person.username}</button></td>                                                                                                        
                            </tr>
                            )}
                            </>
                        </tbody>
                    </table>
                </div>            
        )
    }
        
    
}

export default Table;
