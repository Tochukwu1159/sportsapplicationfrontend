import React from "react";
import logo1 from "../../assets/icon/logo3.png";
// import { NavLink } from 'react-router-dom'
import { useState } from "react";
import {
  Wrapper,
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLinks,
  LogoWrapper,
} from "../../styles/NavbarStyles";
import StyleButton from "../../styles/ButtonStyles.js";
import UserProfileNav from "./UserProfileNav";
import { Link } from "react-router-dom";



export const Navbar = ({ landing, dashboard }) => {
  const [open, setOpen] = useState(false);
  
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = useState(false);
  return (

    <Wrapper>
      <Nav>
      
        <LogoWrapper style={{width: dashboard ? "100%" : ""}} >
        <a href="/">
          <Logo src={logo1} alt="" style={{height:"80px"}}/>
        </a>
        {landing && (
          <Hamburger onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </Hamburger>
        )}
        {dashboard && <UserProfileNav dashboard setLogout={setIsLogin} />}
        </LogoWrapper>
        {landing && (
          <Menu open={open}>
            <MenuLinks onClick={() => setOpen(!open)}>
              <a href="/">Home</a>
            </MenuLinks>
            <MenuLinks onClick={() => setOpen(!open)}>
              <a href="/#about">Discover</a>
            </MenuLinks>
            <MenuLinks onClick={() => setOpen(!open)}>
              <a href="/#product">Buddies</a>
            </MenuLinks>
            <MenuLinks onClick={() => setOpen(!open)}>
              <a href="/#contactUs">Contact Us</a>
            </MenuLinks>
            {localStorage.getItem("token") ? (
              <UserProfileNav setLogout={setIsLogin} />
            ) : (
              <StyleButton onClick={() => setIsLogin(true)} width="20%">
                <Link to="/login">Login</Link>
              </StyleButton>
            )}
          </Menu>
        )}
      </Nav>
    </Wrapper>
  );
};

// activeClassName="active"
