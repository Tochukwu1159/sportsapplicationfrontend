import styled from "styled-components";
import { Link } from "react-router-dom";


export const colors = {
  theme: "lemon",
  light1: "antiquewhite",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#B7C4CF",
  dark3: "#9CA3AF",
  dark4: "#6B7280",
  red: "#DC2626",
};

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;

export const StyledTitle = styled.h6`
  font-weight: bold;
  font-size: 2.0rem;
  color: #21334F;
  margin: 0;
  width:100%;
  text-align: center;
`;

export const StyledSubTitle = styled.p`
max-width: 25rem;
/* width: 100%; */
text-align: center; 
  font-weight: lighter;
  font-size: 16px;
  line-height: 19px;
  color: #C4C4C4;
  margin: 6% 0 4% 0;
`;


export const StyledButton = styled(Link)`
  width: 104px;
  height: 19px;
  margin-left: 295px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: #d8d8d8;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

export const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
`;

export const StyledFormArea = styled.div`
display: flex;
  background: #ffffff;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6rem 15%;
  max-width: 70%;
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledTextInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 8px 16px; */
  /* gap: 10px; */
  justify-content: center;
  width: 320px;
  height: 408px;
  margin-left: -275px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  flex: none;
  order: 1;
  flex-grow: 0; 
`;

export const RestForm = styled.form`
  display: flex;
  flex-direction: column;
  width:20em;
  & label {
    color:#03435F;
  }
`
export const EmailInput = styled.input`
border-radius: 6px;
border:1px solid gray;
font-size: 16px;
font-weight: lighter;
margin: 2% 0 8% 0;
height: 48px;
padding: 0 1em;
color:#03435F;
 ::placeholder {
  color:#C4C4C4;
  font-weight: lighter;

 }
`

export const Back = styled.div`
  padding:5%;
  color: #21334f;
  border: none;
  width: 120px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.05);
  align-self: center;
  text-align: center;
  margin-top: 16%;
  cursor: pointer;
  & a{
    color:black 
  }
`;
