import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import UserImg from '../../assets/images/user.jpeg'
import { FiChevronDown } from "react-icons/fi";
import ProfileIcon from "../../assets/icon/UserIcon.svg";
import SettingsIcon from "../../assets/icon/settings.svg";
import HelpIcon from "../../assets/icon/help.svg";
import LogoutIcon from "../../assets/icon/logout.svg";
import { Link } from "react-router-dom";
import { UseAuth } from "../../context/useAuth";
import {GrUserAdmin} from "react-icons/gr";


const UserProfileNav = ({ setLogout, dashboard, userData }) => {

  const [showDropdown, setShowDropdown] = useState(false);

  const { logout } = UseAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <Profile>
      <Link to={`/dashboard/${localStorage.getItem("id")}`}>
        <ProfileImg>
          <img src={localStorage.getItem("avatar")} alt="" />
        </ProfileImg>
      </Link>
      <span onClick={() => setShowDropdown(!showDropdown)}>
        <span>{localStorage.getItem("userName")?.substring(0,10)} </span>
        {dashboard && (
          <>
            <FiChevronDown />
            <Dropdown showDropdown={showDropdown}>
              <Link to="/dashboard/UpdateUser">
                <DropdownItem>
                  <img src={ProfileIcon} alt="" /> <span>Account</span>{" "}
                </DropdownItem>
              </Link>
              <DropdownItem>
                <img src={SettingsIcon} alt="" /> <span>Settings</span>{" "}
              </DropdownItem>
              {localStorage.getItem("admin") && 
              <Link to={'/dashboard/admin'}>
              <DropdownItem>
                <GrUserAdmin style={{fontSize:"1.5rem"}} /> <span>Admin Board</span>
              </DropdownItem></Link>}
              <DropdownItem onClick={() => handleLogout()}>
                <img src={LogoutIcon} alt="" /> <span>Logout</span>
              </DropdownItem>
            </Dropdown>
          </>
        )}
      </span>
    </Profile>
  );
};

export default UserProfileNav;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  /* border:2px solid red; */
  @media (max-width: 500px) {
  flex-direction: column; 
  
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 10%;
  background-color: #fff;
  width: 226px;
  /* height: 180px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  transition: all 0.3s ease-in-out;
  &.active {
    display: block;
  }
`;
const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #21334f;
  font-weight: lighter;
  margin: 15px 20px;
  & img {
    width: 24px;
  }
`;
