import addSevices from '../../sevices/addSevices.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function ModalAdd(props) {
    const { handleClose, show, handleAdd } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSave = async () => {
        const res = await addSevices(name, job);
        if (res && res.id) {
            handleAdd({ first_name: name, id: res.id, last_name: job });
            toast.success("Add success");
        }
        setName('');
        setJob('');
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input className="form-control" value={job} onChange={(e) => setJob(e.target.value)} />
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

            
           <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default ModalAdd;