import React from "react";
import { Link } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigator = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>
            <MdGroups size="40px" /> Employee Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link">
                <FaHome size="20px" /> Home
              </NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink exact to="/employee" className="nav-link">
                    <MdOutlineFeaturedPlayList size="20px" /> Employee List
                  </NavLink>
                  <NavLink exact to="/manage" className="nav-link">
                    <BsPeopleFill size="20px" /> Manage Employees
                  </NavLink>
                  <Navbar.Brand href="/" className="nav-link">
                    Logout <IoPersonCircle size="20px" />
                  </Navbar.Brand>
                </>
              ) : (
                <>
                  <NavLink
                    exact
                    to="/loginform"
                    activeClassName="activeClicked"
                    className="nav-link"
                  >
                    Login <IoPersonCircle size="20px" />
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigator;
