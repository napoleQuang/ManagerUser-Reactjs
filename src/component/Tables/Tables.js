import Table from 'react-bootstrap/Table';

import userSevices from '../../sevices/userSevices';
import Paginate from '../Paginate/Paginate';

import { useState, useEffect } from 'react';
function Tables() {
    const [userList, setUserList] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
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

    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
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
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Paginate pageCount={totalPage} onPageChange={(clickEvent)=>setPage(+clickEvent.selected+1)} />
        </>
    );
}

export default Tables;