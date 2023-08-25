import userSevices from '../../sevices/userSevices';
import Paginate from '../Paginate/Paginate';
import { ModalAdd, ModalUpdate, ModalDelete } from "../Modals";

import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { CSVLink } from "react-csv";

function Tables() {
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    useEffect(() => {
        getUser(page);
    }, [page]);

    const getUser = async (page) => {
        const res = await userSevices(page);
        if (res && res.data) {
            setUserList(res.data);
            setTotalPage(res.total_pages);
        }
    }

    const handleAdd = (user) => {
        setUserList([user, ...userList]);
    }

    const handleUpdate = (user) => {
        setShowModalUpdate(true);
        setCurrentUser(user);
    }

    const handleDelete = (user) => {
        setShowModalDelete(true);
        setCurrentUser(user);
    }

    const handleUpdateUser = (user, name) => {
        const index = userList.findIndex((index) => index.id === user.id);
        const cloneList = [...userList];
        cloneList[index] = { first_name: name, id: user.id };
        setUserList(cloneList);
    }

    const handleDeleteUser = (id) => {
        const cloneList = userList.filter(item => +item.id !== +id);
        setUserList(cloneList);
    }

    const handleSearch = (e) => {
        const text = e.target.value;
        if (text) {
            const cloneList = userList.filter(item => item.email.includes(text));
            setUserList(cloneList);
        } else {
            getUser(page);
        }
    }

    const Sort = (sortBy, sortFild) => {
        let cloneList = [...userList]
        if (sortFild === 'name') {
            if (sortBy === 'asc') {
                cloneList = cloneList.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0));
            }
            else {
                cloneList = cloneList.sort((a, b) => (a.first_name < b.first_name) ? 1 : ((b.first_name < a.first_name) ? -1 : 0));
            }
        }
        else {
            if (sortBy === 'asc') {
                cloneList = cloneList.sort((a, b) => a.id - b.id);
                console.log(cloneList);
            }
            else {
                cloneList = cloneList.sort((a, b) => b.id - a.id);
                console.log(cloneList);
            }
        }
        setUserList(cloneList);
    }

    const headers = [
        { label: "Id", key: "id" },
        { label: "First Name", key: "first_name" },
        { label: "Last Name", key: "last_name" },
        { label: "Email", key: "email" }
    ];

    return (
        <>
            <div className="my-3 d-flex justify-content-between align-items-center">
                <span>List Users:</span>
                <div class="col-4 d-flex justify-content-between">
                    <CSVLink
                        data={userList}
                        filename={"my-file.csv"}
                        className="btn btn-success col-3"
                        headers={headers}
                    >
                        Export
                    </CSVLink>
                    <label htmlFor="import" class="btn btn-success col-3">Import</label>
                    <input id='import' type='file' hidden onChange={(event)=>console.log(event.target.files[0])}/>
                    <button type="button" class="btn btn-success  col-3" onClick={() => setShowModalAdd(true)}>Add User</button>
                </div>

            </div>
            <div className='col-4 my-3'>
                <input className='form-control' placeholder='Search' onChange={(event) => handleSearch(event)} />
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#
                            <i className="fa-solid fa-arrow-up ms-2" onClick={() => Sort('asc', 'id')}></i>
                            <i className="fa-solid fa-arrow-down ms-1" onClick={() => Sort('desc', 'id')}></i>
                        </th>
                        <th>First Name
                            <i className="fa-solid fa-arrow-up ms-2" onClick={() => Sort('asc', 'name')}></i>
                            <i className="fa-solid fa-arrow-down ms-1" onClick={() => Sort('desc', 'name')}></i>

                        </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary ms-3' onClick={() => handleUpdate(user)}>Update</button>
                                    <button className='btn btn-warning ms-3' onClick={() => handleDelete(user)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Paginate pageCount={totalPage} onPageChange={(clickEvent) => setPage(+clickEvent.selected + 1)} />
            <ModalAdd show={showModalAdd} handleClose={() => setShowModalAdd(false)} handleAdd={handleAdd} />
            <ModalUpdate show={showModalUpdate} handleClose={() => setShowModalUpdate(false)} user={currentUser} handleUpdateUser={handleUpdateUser} />
            <ModalDelete show={showModalDelete} handleClose={() => setShowModalDelete(false)} user={currentUser} handleDeleteUser={handleDeleteUser} />
            
        </>
    );
}

export default Tables;