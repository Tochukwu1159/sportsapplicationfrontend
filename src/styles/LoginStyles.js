import styled from "styled-components";

export const UpdateUserPageStyle = styled.div`
  /* display: relative; */
  background-color: #e5e5e5;
  height: 100vh;
  /* padding: 10%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackDiv = styled.div`
  /* position: absolute; */
  /* width: 100%; */
  /* height: 271px; */
  /* left: 0px;
top: 96px; */

  /* background: rgba(222, 61, 109, 0.1); */
  /* padding: 10%; */
`;

export const Container = styled.div`
  /* width: 640px; */
  width: calc(640px / 2);

  padding: 7% 15%;
  /* margin-bottom: 14rem; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: flex-start; */

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    /* padding: 0; */
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  p {
    margin: 0 0 0.5rem 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  label {
    color: #21334f;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 1rem;
    outline: none;
    border: 1px solid #d9d9d9;
    /* margin-bottom: 1rem; */
    /* width: 100%; */
    margin: 0 0 1rem 0;
  }

  input::placeholder {
    color: #c4c4c4;
  }

  /* .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 620px;
    border:2px solid red;
  } */

  .header-text {
    font-weight: 700;
    color: #21334f;
    margin-bottom: 2.5rem;
  }
  .login-header-text {
    font-weight: 900;
    font-size: 18px;
    color: #21334f;
    line-height: 21.78px;
    margin: 2.5rem 0;
    width: 100%;
  }

  .create-account {
    margin-top: 2rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    /* identical to box height */

    color: #21334f;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .input-element {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
  }

  .form-group {
    /* border: 1px solid blue; */
    align-self: flex-start;
    width: 100%;
  }

  .save-btn {
    margin-top: 1rem;
    /* border: 1px solid red; */
    color: #ffffff;
    padding: 1rem 5.25rem;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  }
  .login-btn {
    margin-top: 1rem;
    /* border: 1px solid red; */
    color: #ffffff;
    padding: 1rem 5.25rem;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
    width: 100%;
  }
  .create-btn {
    margin-top: 1rem;
    /* border: 1px solid red; */
    color: #de3d6d;
    // padding: 1rem 5.25rem;
    // background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
    justify-content: center;
    font-weight: 700;
    margin-top: 4rem;
  }

  .avatar-upload {
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  text-align: center;
  & img {
    width: 60%;
  }
`;

// MODAL DESIGN

export const ModalStyle = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    width: 400px;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    border-radius: 1rem;
    padding: 1rem;
  }

  .modal-logo {
    width: 150px;
  }
  .upload-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .close-btn {
    align-self: flex-end;
    cursor: pointer;
  }
  .allowed-text {
    color: red;
    font-size: 12px;
  }
  .save-btn-modal {
    margin-top: 1rem;
    color: #ffffff;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  }
`;
