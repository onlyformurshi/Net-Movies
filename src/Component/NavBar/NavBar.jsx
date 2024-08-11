import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile_icon from '../../assets/profile_img.png'
import Image from 'react-bootstrap/Image'
import './NavBar.css'
function NavBar() {
  const [active, setActive] = useState("home")
  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar" sticky="top">
      <Container>
        <Navbar.Brand className='me-5' href="#home"><Image src={logo} width="90" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setActive("home")} className={active === "home" ? "active" : "text-white"}>Homde</Nav.Link>
            <Nav.Link onClick={()=>setActive("tvshow")} className={active === "tvshow" ? "active" : "text-white"} >Tv & Shows</Nav.Link>
            <Nav.Link onClick={()=>setActive("new&popular")} className={active === "new&popular" ? "active" : "text-white"} >New & Popular</Nav.Link>
            <Nav.Link onClick={()=>setActive("mylist")} className={active === "mylist" ? "active" : "text-white"} >My List</Nav.Link>
            <Nav.Link onClick={()=>setActive("browsebylangouge")} className={active === "browsebylangouge" ? "active" : "text-white"} >Series</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=>setActive("home")} className={active === "home" ? "active" : "text-white"} ><Image src={search_icon} alt="search icon" /></Nav.Link>
            <Nav.Link onClick={()=>setActive("children")} className={active === "children" ? "active" : "text-white"} >Children</Nav.Link>
            <Nav.Link ><Image src={bell_icon} alt="bell icon" /></Nav.Link>
            <NavDropdown className="custom-dropdown" title={<Image
              src={profile_icon}
              width="30"
              height="30"   
            />} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign out of Netflix</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;