import { UserContext } from '../../context/UserContext.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function Header() {
    const { user,logout } = useContext(UserContext);

    

    const navigate = useNavigate();

    const hanleOnClickLogIn = () => {
        navigate('/login');
    }

    const hanleOnClickLogOut = () => {
        logout();
        navigate('/');
    }

    return (<>
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="/">Manager User</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {((user && user.auth) || window.location.pathname === '/') &&
                        <>
                            <Nav className="me-auto">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                                <NavLink to="/user" className="nav-link">User</NavLink>
                            </Nav>

                            <Nav >
                                {(user && user.auth) && <h7 className='mx-4 align-self-center'>Welcom {user.email}</h7>}
                                <NavDropdown title="Setting" id="basic-nav-dropdown">
                                    {!(user && user.auth) ?
                                        <div className="dropdown-item" onClick={hanleOnClickLogIn}>Log in</div> :
                                        <div className="dropdown-item" onClick={hanleOnClickLogOut}>Log out</div>}
                                </NavDropdown>
                            </Nav>
                        </>
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar >
    </>);
}

export default Header;