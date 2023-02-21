import React, { useState } from "react";
import logo1 from "../../assets/icon/logo3.png";
import { Link } from "react-router-dom";
import backicon from "../../assets/icon/backicon.svg";
import StyleButton from "../../styles/ButtonStyles.js";
import { toast } from "react-toastify";
import {
  Wrapper,
  Wrapper2,
  Logo,
  HeaderAndButton,
  Back,
  FormHeader,
  FormStyle,
  StyledLabel,
  StyledInput,
  StyledFooter,
} from "../../styles/registerStyle";

import { UseAuth } from "../../context/useAuth";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

export const Register = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [passwordMiss, setPasswordMiss] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    interest: "",
    phonenumber: "",
    password: "",
    confirm_password: "",
  });
  const { register } = UseAuth();

  console.log(formData);
  const handleCheckPassword = ()=>{
    if(formData.password !== formData.confirm_password && formData.confirm_password !== ""){
      console.log("a")
      setPasswordMiss(true)
    }else{
      setPasswordMiss(false)
    }
  }
   console.log("b")
  const handleRegister = async (e) => {
    e.preventDefault();
    if(formData.password === formData.confirm_password){
      setShowLoading(true);
       
    await register(formData).then(() => {
      setShowLoading(false);
    }).catch(() => {
      setShowLoading(false);
    });
    console.log("c")
    }else{
      toast.error("Password mismatch", {
        autoClose: 3000,
      });
    }
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Link to="/">
          <Logo src={logo1} alt="logo" />
        </Link>

        <HeaderAndButton>
          <Link to="/login">
            <Back>
              <img src={backicon} alt="logo" />
              Go back
            </Back>
          </Link>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>

        <FormStyle onSubmit={handleRegister}>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            required
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            required
            placeholder="Enter your username"
            type="text"
            name="username"
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value.trim(),
              })
            }
          ></StyledInput>

          <StyledLabel> Interest</StyledLabel>
          <StyledInput
          required
            placeholder="Enter your interest"
            type="text"
            name="interest"
            onChange={(e) =>
              setFormData({
                ...formData,
                interest: e.target.value.trim(),
              })
            }
          ></StyledInput>

          <StyledLabel> PhoneNumber</StyledLabel>
          <StyledInput
          required
            placeholder="Enter your phone number"
            type="text"
            name="phonenumber"
            onChange={(e) =>
              setFormData({
                ...formData,
                phonenumber: e.target.value.trim(),
              })
            }
          ></StyledInput>
          {passwordMiss && <p className="passwordCheck">Password mismatch</p>}
          <StyledLabel> Password</StyledLabel>
          <StyledInput
          required
            placeholder="Enter your password"
            type="password"
            name="password"
            onKeyUp={handleCheckPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value.trim()
              })
            }
          ></StyledInput>
          <StyledLabel> Confirm Password</StyledLabel>

          <StyledInput
          required
            placeholder="Confirm password"
            type="password"
            name="confirm_password"
            onKeyUp={handleCheckPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirm_password: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyleButton disabled={showLoading} width="100%" borderRadius="0" type="submit">
            {showLoading ? <ThreeDots height="1rem" fill="#DE3D6D" /> : "Sign Up"}
           </StyleButton>
        </FormStyle>

        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
