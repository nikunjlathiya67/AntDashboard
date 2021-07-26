import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Form, FormControl, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Badge from "@material-ui/core/Badge";
import Search from "../Assets/Images/Header/Layer16.png";
import Dashboardicon from "../Assets/Images/Header/Dashbord.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Assets/Css/Header.scss";
import Sidebar from "../Element/sidebar"

function Header({ handleOpenHeader, open }) {

   return (
      <>
      <div>
         <Navbar expand="lg">
            <div className="navbar-main">
               <Navbar.Brand href="#home">
                  <b>ANT-CODE</b>
               </Navbar.Brand>
               <Link className="sidebar-toggle" onClick={()=>handleOpenHeader(!open)} >
                  <FontAwesomeIcon icon={faBars} />
               </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Form inline>
                  <FormControl
                     type="text"
                     placeholder="Search"
                     className="mr-sm-2"
                  />
                  <img className="search_icon" src={Search} />
               </Form>
               <Nav className="ml-auto">
                  <Nav.Link href="#home" className="dashboard_icon">
                     <img src={Dashboardicon} />
                  </Nav.Link>
                  <Nav.Link href="#link" className="notification_icon">
                     <Badge badgeContent={4} color="primary">
                        <FontAwesomeIcon icon={faBell} />
                     </Badge>
                  </Nav.Link>
                  <NavDropdown
                     title="John Sen"
                     className="dropdown-wrap"
                     id="basic-nav-dropdown"
                  >
                     <NavDropdown.Item href="#action/3.1">
                        Admin
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Setting
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         </div>
      </>
   );
}

export default Header;
