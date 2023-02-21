import styled from "styled-components";

export const SellAirTimeWrapper = styled.div`
  color: #012a4a;
  padding: 0 3%;
  & h5 {
    font-weight: 600;
    line-height: 17px;
    font-size: 14px;
  }

  & label {
    margin: 12px 0 10px 0;

    font-size: 14px;
  }

  & .input-element {
    margin: 12px 0 10px 0;
  }
`;
export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ Padding }) => (Padding ? Padding : "14px")};
  margin: 10px 0;
  border: 1px solid #d9d9d9;
  outline: none;
`;
