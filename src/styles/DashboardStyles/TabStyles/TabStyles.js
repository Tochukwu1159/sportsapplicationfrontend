import styled from "styled-components";

export const TabStyle = styled.div`
  width: 97%;
  height: auto;
  min-height: 400px;
  /* background: #e5e5e2; */
  margin: 0.5rem auto 1.5rem;
  padding: 2rem 1rem;
  /* color: #e8f0f2; */
  // border: 4px sol
  // border-radius: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }

  /* Tab Navigation */
  & ul.nav {
    width: 100%;
    margin: -0.5rem auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid #39a2db;
    border-radius: 2rem;
    padding-left: 0px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  & ul.nav li {
    width: 50%;
    padding-bottom: 1%;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    height: 17px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #012a4a;

    flex-grow: 0;
  }

  & ul.nav li:first-child {
    // border-bottom-left-radius: 2rem;
    // border-top-left-radius: 2rem;
  }

  & ul.nav li:last-child {
    // border-bottom-right-radius: 2rem;
    // border-top-right-radius: 2rem;
  }

  & ul.nav li:hover {
    // background: rgba(50, 224, 196, 0.15);
    border-bottom: 1px solid #de3d6d;
  }

  & ul.nav li.active {
    /* background: #39a2db; */
    border-bottom: 1px solid #de3d6d;
  }

  /* Tab Content Styles */
  & .TabContent {
    margin: 0 6%;
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  /* border:2px solid red; */
  @media (max-width: 649px) {
    /* gap: 20px; */
  }
  @media (max-width: 630px) {
    /* gap: 15px; */
  }
  @media (max-width: 612) {
    /* gap: 8px; */
    /* padding: 0.5rem; */
  }
  @media (max-width: 414px) {
    /* padding: 1rem 0; */
    display: block;
  }
`;

export const TabContentItem = styled.div`
  width: 100%;
  /* height: 389px; */
  box-sizing: border-box;
  /* Inside auto layout */
  overflow-y: scroll;
`;

export const DashCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;
  height: 887px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const TabElement = styled.div`
/* border:2px solid red; */
  height: 17px;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 17px; */
  margin: 5% 0% 0 0%;
  color: #012a4a;
  cursor: pointer;
  /* flex: none; */
  /* order: 0; */
  /* flex-grow: 0; */

  ${({ active }) => active && `border-bottom: 1px solid #DE3D6D; `}
`;
