import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handelLogout = () => {
        logout()
        .then()
        .catch();
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-dark me-2' to='/category/0'> Home</Link>
                            <Link className='text-decoration-none text-dark me-2' to='/'> About</Link>
                            <Link className='text-decoration-none text-dark' to='/'> Career</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}>
                                </FaUserCircle>
                            }

                            {user ?
                                <Link onClick={handelLogout} className='btn btn-primary' >
                                    Logout
                                </Link>
                                :
                                <>
                                    <Link className='btn btn-primary' to='/login'  >
                                        Login
                                    </Link>
                                    <Link className='btn btn-primary' to='/register'  >
                                        Register
                                    </Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;