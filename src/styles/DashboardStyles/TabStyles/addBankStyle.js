import styled from "styled-components";
export const BankWrapper = styled.div`
padding: 0 3%;
`
export const BankHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  & .bank-acct {
    font-weight: 600;
    font-size: 24px;
    color: #012a4a;
  }

  & p {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    color: #de3d6d;
  }
`;
export const BankStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 387px) {
    .bank-header {
      flex-direction: column;
      margin-bottom: 0.5rem;
      gap: -10px;
    }
  }

  .accounts {
    overflow: auto;
    height: 70vh;
    padding: 0 1%;
  }
`;

export const AccountStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  

  padding: 8px 16px;
  margin-bottom: 2rem;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);

  & .content p {
    margin: 0.1rem;
    padding: 0.1rem;
    font-weight: 400;
    font-size: 14px;
    color: #012a4a;
  }

  & .remove-btn {
    padding: 10px;
    border: none;
    cursor: pointer;

    background: rgba(0, 0, 0, 0.05);
    border-radius: 100px;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #012a4a;
  }

  @media screen and (max-width: 387px) {
    flex-direction: column;
  }
`;
