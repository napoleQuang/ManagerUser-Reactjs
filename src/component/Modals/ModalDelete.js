import deleteSevices from '../../sevices/deleteSevices.js';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
function ModalDelete(props) {
    const { handleClose, show, user, handleDeleteUser } = props;

    const handleDelete = async()=>{
        const res =await deleteSevices(user.id);
        if(res&&res.status){
            handleDeleteUser(user.id);
            toast.success('Delete');
        }
        handleClose();
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure delete this email:</h4>
                    <h6>{user.email}</h6>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
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

export default ModalDelete;