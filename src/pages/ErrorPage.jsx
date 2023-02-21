import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/icon/logo2.svg";
import {
  Container,
  UpdateUserPageStyle,
  LogoWrapper,
} from "../styles/LoginStyles";
export const Error = () => {
  return (
    <UpdateUserPageStyle>
      <Container>
        <div className="container">
          <Link to="/">
            <LogoWrapper>
              <img src={logo} alt="logo" className="logo" />
            </LogoWrapper>
          </Link>
          <h1 className="login-header-text">404 - PAGE NOT FOUND</h1>
          <p className="create-account">
            The page you are looking for does not exist or has been moved.{" "}
            <br />
          </p>
        </div>
        <Link to="/">
          <button type="submit" className="login-btn">
            GO TO HOMEPAGE
          </button>
        </Link>
      </Container>
    </UpdateUserPageStyle>
  );
};
