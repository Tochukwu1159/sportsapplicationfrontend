import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  display: flex;
  /* border:2px solid red; */
  justify-content: center;
  /* padding: 5% 1%; */
`;

export const Wrapper2 = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 6% 15%;
  background: #fff;
  width: calc(640px / 2);
  margin: 5% 0%;

  /* width: 20%; */
  /* max-width: 100%; */
  /* margin: 0 auto; */
`;

export const Logo = styled.img` 
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 151px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const HeaderAndButton = styled.div`
  width: 100%;
`;

export const Back = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-weight: lighter;
  color: #21334f;
  border: none;
  width: 70px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 40px;
  & img {
    margin-right: 10px;
    width: 13;
    height: 13;
  }
`;

export const FormHeader = styled.div`
  font-style: normal;
  font-weight: 700;

  color: #21334f;
  margin-top: 40px;
  margin-bottom: 35px;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #21334f;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const FormStyle = styled.form`
  margin: 0 ;
  width: 100%;
  & .passwordCheck{
    color:red;
    font-size: 12px;
    width:100%;
  }
`;
export const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 16px;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #c4c4c4;
  }
`;

export const StyledFooter = styled.div`


  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #21334f;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 40px;
  a {
    color: #de3d6d;
    text-decoration: none;
    font-weight: bold;
  }
`;
