import React, {useState} from "react";
import { Link,  } from "react-router-dom";
import mailIcon from "../assets/icon/mail.svg"; 
import StyleButton from '../styles/ButtonStyles.js'
import { UseAuth } from "../context/useAuth";
import { ResendVerification } from "./ResendVerification";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  ExtraText,
  TextLink,  
  Icon,
  ButtonWrapper
} from "../styles/emailStyle";

export const EmailSent = ({text, password, email}) => {
  const user_email = localStorage.getItem('email')

    const { forgotPassword } = UseAuth();
     const [formData, setFormData] = useState({
       email: user_email,
     });

    const handleForgetPassword = async (e) => {
      e.preventDefault();
      await forgotPassword(formData);
    };
  return (
    <>
    <StyledContainer>
      <StyledFormArea>
        <Icon>
          <img src={mailIcon} alt="" />
        </Icon>
        <StyledTitle>Check your email</StyledTitle>
        <StyledSubTitle>{text}</StyledSubTitle>

        <ExtraText>
          Don't receive the email?
          <TextLink>
            {password && 
              <Link  to="/forgottenpassword"> Click to Resend Link</Link>
            }
            {email && 
              <button style={{cursor:"pointer"}} onClick={()=>ResendVerification()}> Click to Resend Link</button>
            }
          </TextLink>
        </ExtraText>
        <ButtonWrapper>
        <Link to="/login"><StyleButton borderRadius="0" width="100%" height="54px">
            Back to login
          </StyleButton></Link>
        </ButtonWrapper>
      </StyledFormArea>
    </StyledContainer>
    </>
  );
};

