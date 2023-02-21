import styled from "styled-components";

// NAV BAR SECTION
export const Wrapper = styled.div`
/* border:2px solid red; */
box-sizing: border-box;
  /* position: absolute; */
  position: fixed;
  width: 100%;
  Z-index: 100;
  /* @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    border: 2px solid red;
  } */
`;
export const Nav = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 96px;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 10%; 
  @media (max-width: 320px) {
    padding:0 3%;
  }

`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  /* width:100%; */ 

  span {
    height: 2px;
    width: 25px;
    background-color: #012a4a;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;
export const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    overflow: hidden;
    flex-direction: column;
    height: 15rem;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    margin-bottom: ${({ open }) => (open ? "5%" : "0")};
  }
`;
export const MenuLinks = styled.div`
  & .active {
    color: #de3d6d;
    text-decoration: none;
    font-weight: 600;
  }
  a {
    padding: 1rem 1rem;
    width: 6rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #012a4a;
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    font-weight: 400;
    &:hover {
      color: #de3d6d;
    }
  }
`;
export const Logo = styled.img`
  /* padding: 1rem 0; */
  width: 90%;
  padding:0;
  /* border:2px solid red; */
  margin:0;
`;

export const LogoWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
/* @media (max-width: 1024px) {
width: 100%;

} */
@media (min-width: 1440px) {
  /* border:2px solid red; */
  width: auto;
}
`