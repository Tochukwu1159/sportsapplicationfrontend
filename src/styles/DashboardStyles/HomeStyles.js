import styled from "styled-components";

export const DashboardStyle = styled.div`
  & .top {
    width: 100%;
    margin: 0%;
    max-width: 100vw;
    height: 25rem;
    background: rgba(222, 61, 109, 0.1);
  }

  & .dashboard {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 45rem;
    max-width: 100%;
    margin: -13rem auto 10rem auto;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    padding: 0 3% 5% 3%;
    /* height: 100vh; */
    & h1 {
      font-weight: 600;
      width: 100%;
      text-align: center;
      color: #012a4a;
    }

    & .balance-wrapper {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      width: 100%;
      max-width: 100%;
      /* height: 9.438rem; */
      background: #de3d6d;
      border-radius: 1.5rem;
      margin-top: 3rem;
    }

    & .balance {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0rem;
      gap: 0.7rem;

      width: 11.438rem;
      /* height: 6.625rem; */

      .text {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 0;
        color: #ffffff;
      }

      & .acct-bal {
        font-weight: 700;
        font-size: 2.3em;
        line-height: 39px;
        margin: 0;
        color: #ffffff;
      }

      & button {
        justify-content: center;
        align-items: center;
        padding: 8px 10px 8px 8px;
        gap: 10px;
        color: #ffffff;

        /* width: 99px;
        height: 28px; */

        background: rgba(0, 0, 0, 0.05);
        opacity: 0.8;
        border: 1px solid rgba(0, 0, 0, 0.04);
        border-radius: 100px;
      }
    }
  }
`;
