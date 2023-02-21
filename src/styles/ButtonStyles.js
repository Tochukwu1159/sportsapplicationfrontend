import styled from 'styled-components'

const Button = styled.button`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  color: #fff;
  padding: 10px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  background-image: ${({ disabled }) =>
    disabled ? "linear-gradient(to right, #EF9EB6, #F8A982)" : "linear-gradient(to right, #DE3D6D,#F5844C)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#DE3D6D")};
  }
`;

export default Button
