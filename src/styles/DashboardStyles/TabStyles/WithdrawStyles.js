import styled from "styled-components";
export const WithdrawWrapper = styled.div`
color: #012A4A;
  margin-top: 4%;
  font-weight: 400;
  padding: 0 3%;
  & form {
    margin: 5% auto;
  }

  & .form-group {
    margin-top: 1%;
    /* display: flex;
    flex-direction: column; */
    /* border: 2px solid red; */
  }
  & label {
    font-size: 14px;
    color: #012a4a;
    font-weight: 400;
  }

  & select,
  & input {
    padding: 15px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
    border: 1px solid #d9d9d9;
    color: #c4c4c4;
    box-sizing: border-box;
  }
  & input {
    width: 100%;
  }
  & select:focus,
  & input:focus {
    outline: none;
  }

  & ::placeholder {
    color: #c4c4c4;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 4%;
`;
export const TabTitle = styled.small`
  font-size: 14px;
  color: #012a4a;
`;
