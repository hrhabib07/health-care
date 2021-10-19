import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="mx-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/expert">Expert</Nav.Link>
        <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
        {
            user.email && <>
                <b style={{color:"white", margin:"10px"}}>{user.displayName}</b>
                <button className="btn-regular" onClick={logOut}>LogOut</button>
            </>
        }
        {
            user.email || <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>  
            <Nav.Link as={Link} to="/registration">Register</Nav.Link>
            </>
        }  
        </Nav>
        </Container>
        </Navbar> 
        </>
    );
};

export default Navigation;