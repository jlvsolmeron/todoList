import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Input from './input';

function Buttons() {
    const [showList, setShowAddList] = useState(false);
    const [showTask, setShowAddTask] = useState(false);
    

    const closeAddList = () => setShowAddList(false);
    const showAddList = () => setShowAddList(true);

    const closeAddTask = () => setShowAddTask(false);
    const showAddTask = () => setShowAddTask(true);
                        
    const logs = () => [console.log(state.count), console.log(state.count + 1), console.log(state.count + 2), console.log(state.count)]

    const state = {
        count: 1
    }

    return (
        <>
            <div>
                <button className=" btn btn-primary" onClick={showAddList}>Create List</button>
                <button className=" btn btn-primary ml-2" onClick={showAddTask}>  Add Task</button>
                <button className=" btn btn-danger ml-2">Delete List</button>
            </div>

            <Modal show={showList} onHide={closeAddList}>
                <Modal.Header closeButton>
                    <Modal.Title>Create List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                        
                        <Input />                                                               
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeAddList}>Close</Button>
                        <Button type="submit" variant="primary" onClick={closeAddList}>Add List</Button>
                    </Modal.Footer>
            </Modal>

            <Modal show={showTask} onHide={closeAddTask}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeAddTask}>Close</Button>
                        <Button variant="primary" onClick={closeAddTask}>Add List</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default Buttons;
