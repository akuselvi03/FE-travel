import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiLogInCircle } from 'react-icons/bi';
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const {user, logOut}= useAuth();
  return (
    <div className='padding'>
      <Navbar className='header bg-dark' expand="lg" fixed="top">
        <Container>
          <NavLink to="/home"><img className='w-100' src="http://www.soaptheme.net/html/travelo/images/logo.png" alt="" /></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-3">
              <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/home">Home</NavLink>
              <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/feature">Features</NavLink>
              {user.displayName && <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/my-booking">My Booking</NavLink>}
              {user.displayName && <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/allBookingInfo">Total Booking Info</NavLink>}
              {user.displayName && <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/addService">Add Service</NavLink>}
              <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white' to="/footer">Contact</NavLink>
            </Nav>
            <Nav className='mt-3'>
            {user.displayName ? <div>
              <span className='text-white mx-2'>{user.displayName}</span>
               <button onClick={logOut} className='btn btn-danger'>LogOut</button>
              </div>:
              <NavLink className='text-decoration-none me-3 fs-6 fw-bold text-white btn btn-primary' to="/login"><BiLogInCircle/> LogIn</NavLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;