import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UseAuth } from "../context/useAuth";
//eslint-disable-next-line
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";

import {
  //eslint-disable-next-line
  BackDiv,
  Container,
  UpdateUserPageStyle,
  ModalStyle,
} from "../styles/DashboardStyles/UpdateUserStyles";

import { Back, HeaderAndButton } from "../styles/registerStyle";

import logo from "../assets/icon/logo2.svg";
import backicon from "../assets/icon/backicon.svg";
import axios from "axios";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";
import { toast } from "react-toastify";

export const UpdateUserSetting = () => {
  const id = localStorage.getItem("id");
 const  preemail= localStorage.getItem("email");
  const preusername= localStorage.getItem("username");
  const preinterest = localStorage.getItem("interest");
  const prephonenumber = localStorage.getItem("phonenumber");
  const preavatar= localStorage.getItem("avatar");

  const [modalState, setModalState] = useState(false);
  const [fileImage, setFileImage] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const { updateProfile } = UseAuth({});

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalState(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const [email, setemail] = useState(preemail);
  const [username, setusername] = useState(preusername);
  const [interest, setinterest] = useState(preinterest
  );
  const [phonenumber, setphonenumber] = useState(prephonenumber);
  const [avatar, setAvatar] = useState(preavatar);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setemail(e.target.value);
        break;
      case "username":
        setusername(e.target.value);
        break;
      case "interest":
        setinterest(e.target.value);
        break;
      case "phonenumber":
        setphonenumber(e.target.value);
        break;
      case "avatar":
        setAvatar(e.target.value);
        break;
      default:
    }
  };

  const formData = {
    email: email,
    username: username,
    phonenumber: phonenumber,
    interest: interest,
    avatar: avatar,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setShowLoading(true); 
    await updateProfile(formData).then(() => {
      setShowLoading(false);
      window.location.href = `/dashboard/${id}`;
    }).catch(() => {
      setShowLoading(false);
      toast.error("Oops an error ocurred", {
        autoClose: 3000,
      });
    });;
  };

  // eslint-disable-next-line
  const handleImageChange = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
  };

  const uploadAvatar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileImage);
    formData.append("upload_preset", "sprint2");
    try {
      const res = await axios
        .post(
          "http://api.cloudinary.com/v1_1/podf-live-project/image/upload",
          formData
        )
        .then((res) => {
          setAvatar(res.data.secure_url);
          setModalState(false);
        })
        .catch((err) => {
          console.log(err);
          setModalState(false);
        });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setModalState(false);
    }
    setModalState(false);
  };
  return (
    <UpdateUserPageStyle>
      <div className="top"></div>
      <Container>
        <HeaderAndButton>
          <Link to={`/dashboard/${id}`}>
            <Back>
              <img src={backicon} alt=" " />
              Go back
            </Back>
          </Link>
        </HeaderAndButton>
        <div className="container">
          <div className="imgWrapper">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <h3 className="header-text">Basic Information</h3>

          <form action="" className="form-group" onSubmit={handleUpdate}>
            <div className="input-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Last Name"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="interest">Interest</label>
              <input
                type="text"
                name="interest"
                placeholder="Phone Number"
                value={interest}
                onChange={handleChange}
              />
            </div>

            <div className="input-element">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone number"
                value={phonenumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-element">
              <label htmlFor="">Avatar :</label>
              <input
                style={{
                  backgroundColor: "rose",
                  color: "red",
                  border: "none",
                  padding:"5% 0",
                  font: "inherit",
                  cursor: "pointer",
                }}
                type="button"
                placeholder="Avatar"
                value={"Click to Upload Photo"}
                className="avatar-upload"
                onClick={() => {
                  setModalState(true);
                }}
              />
            </div>
              
            <button disabled={showLoading} type="submit" className="save-btn">
            {showLoading ? <ThreeDots height="0.5rem" width="5.25rem" /> : 'Save'}
            </button>
          </form>
        </div>
        {modalState && (
          <ModalStyle>
            <div className="modal-content" ref={wrapperRef}>
              <div
                className="close-btn"
                onClick={() => {
                  setModalState(false);
                }}
              >
                <FaTimes />
              </div>
              <img src={logo} alt="logo" className="modal-logo" />
              <div className="upload-section">
                <h3
                  style={{
                    background: "rose",
                    color: "red",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    cursor: "pointer",
                  }}
                >
                  Upload a Photo
                </h3>
                <form>
                  {/* <form onSubmit={uploadAvatar}> */}
                  <input
                    type="file"
                    name=""
                    id=""
                    className="modal-input"
                    // onChange={handleImageChange}
                    onChange={(e) => setFileImage(e.target.files[0])}
                  />
                  <p className="allowed-text">
                    *Allowed formats: jpeg, jpg, png and svg*{" "}
                  </p>
                  <button
                    type="submit"
                    className="save-btn-modal"
                    onClick={uploadAvatar}
                  >
                    Add Photo
                  </button>
                </form>
              </div>
            </div>
          </ModalStyle>
        )}
      </Container>
    </UpdateUserPageStyle>
  );
};
