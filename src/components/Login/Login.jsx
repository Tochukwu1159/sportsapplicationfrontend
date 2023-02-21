import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/icon/logo2.svg";
import logo1 from "../../assets/icon/logo3.png";

import {
  Container,
  UpdateUserPageStyle,
  LogoWrapper,
} from "../../styles/LoginStyles";
import { UseAuth } from "../../context/useAuth"; 
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

export const Login = () => {
  const [showLoading, setShowLoading] = useState(false);

  const [formData, setFormData] = useState({
    userInfo: "",
    password: "",
  });
  const { login } = UseAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
  setShowLoading(true);

    await login(formData).then(() => {
      setShowLoading(false);
    }).catch(() => {
      setShowLoading(false);
    }
    );

  };

  return (
    <UpdateUserPageStyle>
      {/* <BackDiv /> */}
      <Container>
        <div className="container">
          <Link to="/">
            <LogoWrapper>
              <img src={logo1} alt="logo" className="logo" />
            </LogoWrapper>
          </Link>

          <h2 className="login-header-text">Login</h2>

          <form action="" className="form-group" onSubmit={handleLogin}>
            <div className="input-element">
              <label htmlFor="">Email/Username</label>
              <input
              required
                type="text"
                name="userInfo"
                placeholder="Enter your email or username"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    userInfo: e.target.value.trim(),
                  });
                }}
              />
            </div>
            <div className="input-element">
              <label htmlFor="password">Password</label>
              <input
              required
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value.trim(),
                  });
                }}
              />
            </div>
            <Link to="/forgottenpassword">
              <p
                style={{
                  color: "#4285F4",
                  fontStyle: "normal",
                  fontWeight: "lighter",
                  fontSize: "12px",
                  lineHeight: "15px",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </p>
            </Link>
            {/* <Button type="submit"  disabled={showLoading} borderRadius="0%"  height="48px" width="198px">
             {!showLoading ? <span>Login</span>:
              <ThreeDots height="1rem" fill="#DE3D6D" />}
          </Button> */}
            <button disabled={showLoading} type="submit" className="login-btn">
            {!showLoading ? <span>Login</span>:
              <ThreeDots height="1rem" fill="#fff" />}
            </button>
          </form>
          <p className="create-account">
            Don't have an account? &nbsp;
            <Link to="/register" className="create-btn">
              Create Account
            </Link>
          </p>
        </div>
      </Container>
    </UpdateUserPageStyle>
  );
};
