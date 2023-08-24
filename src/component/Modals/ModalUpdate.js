import updateSevices from '../../sevices/updateSevices.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function ModalUpdate(props) {
    const { handleClose, show, user ,handleUpdateUser } = props;
    const [name, setName] = useState('');


    useEffect(() => {
        setName(user.first_name);
    }, [user]);
   
    const handleUpdate =async () => {
        const res=await updateSevices(user.id,name);
        if(res&&res.updatedAt){
            handleUpdateUser(user,name);
        }
        handleClose();
        toast.success("Update success");
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
                            <label className="form-label">NameUpdate</label>
                            <input className="form-control" value={name || ''} onChange={(e) => setName(e.target.value)} />
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
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

export default ModalUpdate;