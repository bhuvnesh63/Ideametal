import React from 'react';
import {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Button } from 'react-bootstrap';
import {BiLogOut} from 'react-icons/bi'

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');

    // toast.success('You have been logged out successfully');

    Navigate('/');
  };

  return (
    <>
      <Navbar className="nav-container" expand="lg">
        <Container>
          <Link className="logo-link" >Ideas Metal</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                      </Nav>
            {isLoggedIn ? (
              <Nav>
              
                  <Button className='logout-button' onClick={handleLogout}><BiLogOut/></Button>
               
              </Nav>
            ) : (
              <Nav>
                {/* <Link className="nav-link" to="/login">Login</Link> */}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
