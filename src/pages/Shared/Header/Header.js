import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import logoImg from '../../../img/logo.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <header>
           <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logoImg} alt='site identity' style={{height: "30px"}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{fontWeight: 600}}>
                    <Nav.Link as={NavLink} activeClassName='active' to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName='active' to="/services">Services</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName='active' to="/appointment">Appointment</Nav.Link>
                    <Nav.Link as={NavLink} activeClassName='active' to="/about">About</Nav.Link>
                    {
                        user ? <Nav.Link as={Link} to='/home' className="text-white" onClick={logOut}> {user.displayName} Logout</Nav.Link> :
                        <Nav.Link as={NavLink} className='bg-danger px-4 text-light rounded-pill' to="/login">Login/Register</Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </header>
    );
};

export default Header;