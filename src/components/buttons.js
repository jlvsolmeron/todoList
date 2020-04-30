import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Input from './input';

function Buttons() {
    const [showList, setShowAddList] = useState(false);
    const [showTask, setShowAddTask] = useState(false);
    const [showDelete, setDelete] = useState(false);
    

    const closeAddList = () => setShowAddList(false);
    const showAddList = () => setShowAddList(true);

    const closeAddTask = () => setShowAddTask(false);
    const showAddTask = () => setShowAddTask(true);

    const closeDeleteList = () => setDelete(false);
    const showDeleteList = () => setDelete(true);             
    
    const color = {
        color: 'red'
    }

    const state = {
        count: 1
    }

    return (
        <>
            <div>
                <button className=" btn btn-primary" onClick={showAddList}>Create List</button>
                <button className=" btn btn-primary ml-2" onClick={showAddTask}>  Add Task</button>
                <button className=" btn btn-danger ml-2" onClick={showDeleteList}>Delete List</button>
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
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <FormControl></FormControl>
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeAddTask}>Close</Button>
                        <Button variant="primary" onClick={closeAddTask}>Add Task</Button>
                    </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={closeDeleteList}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><h3 style={color}>Are you sure you want to delete current list?</h3></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeDeleteList}>Close</Button>
                        <Button variant="danger" onClick={closeDeleteList}>Delete</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default Buttons;
