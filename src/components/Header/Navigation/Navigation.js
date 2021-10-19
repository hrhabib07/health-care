import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    console.log(user);
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="mx-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/expert">Expert</Nav.Link>
        <Nav.Link as={Link} to="/appointment">Detail</Nav.Link>
        {
            user.email && <>
                <div>
                <img src={user.photoURL} className="border rounded me-3" style={{width:"30%"}} alt="" /> 
                </div>
                <button onClick={logOut}>LogOut</button>
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