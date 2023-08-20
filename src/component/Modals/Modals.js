import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
function Modals(props) {
    const { handleClose, show } = props;
    const [name,setName]=useState('');
    const [job,setJob]=useState('');

    const handleSave =()=>{
        console.log(name,job);
        setName('');
        setJob('');
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Job</label>
                        <input className="form-control" value={job} onChange={(e)=>setJob(e.target.value)}/>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>    
    );
}

export default Modals;