import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import logo from "../static/logo.png";
import "../App.css";
import { MdGroups } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import LoginForm from "./Login";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          {" "}
          <MdGroups size="40px" />
          <span>&nbsp;&nbsp;</span> Employee Management System
        </Navbar.Brand>
      </Navbar>
      <div className="sidebar">
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Navigation
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/employee" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">
                  Employee List
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/manage" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="users">
                  Manage Employees
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
