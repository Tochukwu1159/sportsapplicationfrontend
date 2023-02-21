import React, { useState } from "react";
import { UseAuth } from "../context/useAuth";
import StyleButton from "../styles/ButtonStyles.js";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  Back,
  RestForm,
  EmailInput,
} from "../styles/forgetPassStyle";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loading-icons";

export const ForgottenPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const { forgotPassword } = UseAuth();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setShowLoading(true);
    await forgotPassword(formData).then(() => {
      setShowLoading(false);
    }).catch(() => {
      setShowLoading(false);
    });
  };
  return (
    <StyledContainer>
      <StyledFormArea>
        <StyledTitle>Forgot Password</StyledTitle>
        <StyledSubTitle>
          Enter the email associated with your account and we'll send an email
          with instruction to reset your password
        </StyledSubTitle>
        <RestForm onSubmit={handleForgetPassword}>
          <label>Email</label>
          <EmailInput
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value.trim(),
              });
            }}
          />

 
            <StyleButton
              disabled={showLoading}
              width="100%"
              height="48px"
              type="submit"
            >
               {!showLoading ? <span>Submit</span>:
              <ThreeDots height="1rem" fill="#DE3D6D" />}
            </StyleButton>
          

          <Back>
            <Link to="/login">Back to Login</Link>
          </Back>
        </RestForm>
      </StyledFormArea>
    </StyledContainer>
  );
};

// export default ForgottenPasswordPage;
