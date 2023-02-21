import styled from "styled-components";

export const ModalStyle = styled.div`
  & .container {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

    & .modal {
      z-index: 1;
      width: 509px;
      height: 408px;
      background: #ffffff;
      justify-content: center;
      font-size: 2rem;
      border-radius: 5px;
      position: relative;
      animation: animate 0.2s;
      padding: 2rem;

      & img {
        width: 20%;
        margin-left: 40%;
        margin-top: 2rem;
      }

      & .content {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        & .success {
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: #21334f;
        }

         & .text {
          margin-top: -1rem;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          width: 230px;
          text-align: center;
          color: #21334f;
        }
      }

      & .done-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 10px 10px 8px;
        gap: 2px;
        width: 343px;
        height: 44px;
        border: none;
        margin: 2rem auto 0 auto;

        background: rgba(226, 0, 16, 0.05);

        font-weight: 600;
        font-size: 14px;
        line-height: 17px;

        color: #de3d6d;
        cursor: pointer;
      }
    }
  }

  @keyframes animate {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }
`;
