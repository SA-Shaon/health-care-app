import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/navicon.png';
import auth from '../../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const emailName = user?.email.split('@');
    return (
        <div className='text-white'>
            <Navbar bg="primary" expand="lg">
                <Container className='container header' fluid>
                    <div >
                        <Navbar.Brand className='d-flex' as={Link} to='/'>
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </div>
                    <div className='navlink'>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <div className="d-flex ">
                                <Nav className="me-auto fw-bold">
                                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                                    <Nav.Link as={Link} to='/doctors'>Doctors</Nav.Link>
                                    <Nav.Link as={Link} to='/about'>AboutUs</Nav.Link>
                                    {
                                        user && <h5 style={{ margin: "auto 0", color: "black" }}>{user.displayName ? user.displayName : emailName[0]}</h5>
                                    }
                                    {
                                        !user ?
                                            <Nav.Link as={Link} to='/login'>LogIn</Nav.Link> :
                                            <button onClick={async () => await signOut()
                                            } type="button" className="btn btn-success text-dark ms-2">SignOut</button>
                                    }
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;