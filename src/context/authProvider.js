import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ResendVerification } from "../pages/ResendVerification";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const initialState = {
  loggedIn: false,
  token: localStorage.getItem("token") || "",
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        loggedIn: false,
        user: action.data,
      };

    case "VERIFY_EMAIL":
      return {
        ...state,
        user: action.data,
      };

    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case "GETUSER":
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case "FORGOT_PASSWORD":
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
      };

    case "RESET_PASSWORD":
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };

    default:
      throw new Error();
  }
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (formData) => {
    try {
      const registerUser = {
        email: formData.email,
        username: formData.username,
        interest:formData.interest,
        phonenumber: formData.phonenumber,
        avatar: formData.avatar,
        password: formData.password,
        confirm_password: formData.confirm_password,
      };

      console.log({registerUser}, "user111")

      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/register`,
        data: registerUser
      })

      if (res.status === 201) {
        dispatch({ type: "REGISTER", payload: res.data });
        toast.success(res.data.message, {
          autoClose: 1000,
        });
        localStorage.setItem("user", JSON.stringify(res.data));
        setTimeout(() => {
          navigate("/verify-emailsent");
          toast.success("Verify your email", {
            autoClose: 3000,
          });
        }, 2000);
      }
    } catch (err) {
    console.log(err.response && err.response.data)

      toast.error(err.response.data.Error, {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };

  const login = async (formData) => {
    try {
      const loginUser = {
       userInfo: formData.userInfo,
        password: formData.password,
      };
      console.log({loginUser}, "user111")

      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/login`,
        data: loginUser
      });

      console.log(res, "redc000");

      if (res.status === 200) {
        console.log(res.data.User, "redc000");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.User.id);
        localStorage.setItem("email", res.data.User.email);
        localStorage.setItem("username", res.data.User.username);
        localStorage.setItem("interest", res.data.User.interest);
        localStorage.setItem("phonenumber", res.data.User.phonenumber);
        localStorage.setItem("avatar", res.data.User.avatar);
        dispatch({ type: "LOGIN", payload: res.data });
        toast.success(res.data.message, {
          autoClose: 3000,
        });
        setTimeout(() => {
        navigate(`/dashboard/${res.data.User.id}`);
      }, 2000);
        return;
      }
    



  
    //     .catch((err) => {
    //       if (err.response.data.message === "Please verify your email") {
    //         toast.error(err.response.data.message, {
    //           autoClose: 3000,
    //         });
    //         ResendVerification();
    //       } else {
    //         toast.error(err.response.data.message, {
    //           autoClose: 3000,
    //         });
    //       }
    //     });
    } catch (err) {
      console.log(err)
      toast.error("Please kindly singin", {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };


  const forgotPassword = async (formData) => {
    try {
      const email = {
       email: formData.email,
      };
      console.log({forgotPassword}, "user111")

      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/forgotpassword`,
        data: email
      })
          if (res.status === 200) {
            console.log(res);
            // should take you to a check your email-for-reset-password-link page
            navigate("/emailsent");
            toast.success("Reset password sent to you email", {
              autoClose: 3000,
            });
            dispatch({ type: "FORGOT_PASSWORD", payload: res.data });
          } else {
            toast.error(
              "Unable to send verification Email check connectivity",
              {
                autoClose: 3000,
              }
            );
          }
    } catch (err) {
      console.log(err);
      toast.error("No user found, kindly register", {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };



  const resetPassword = async (formData, id) => {
    try {
      const password = {
        password: formData.password,
        confirm_password: formData.confirm_password,
      };
      console.log({password}, "user111")

      const res = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_BACKEND_URL}/users/change-password/${id}`,
        data: password
      })
          if (res.status === 200) {
            dispatch({
              type: "RESET_PASSWORD",
              payload: res.data,
            });
            setTimeout(() => {
              navigate("/login");
              toast.success("Password reset successfully", {
                autoClose: 1500,
              });
            }, 2000);
          }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
      if (err.response.data.Error) {
        toast.error(err.response.data.Error, {
          autoClose: 3000,
        });
      }
      throw new Error(`${err}`);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };

  const getUser = async () => {
    try {
      //
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/users/getAllUsers`)
        .then((res) => {
          //  localStorage.setItem("user", res.data.user.id);
          if (res.status === 200) {
            dispatch({ type: "GETUSER", payload: res.data });
            return;
          }
        })
        .catch((err) => {
          throw new Error(`${err}`);
        });
    } catch (err) {
      throw new Error(`${err}`);
    }
  };
  const updateProfile = async (formData) => {
    try {
      const form = {
        
        email: formData.email || localStorage.getItem("email"),
        username: formData.username || localStorage.getItem("username"),
        interest: formData.interest || localStorage.getItem("interest"),
        phonenumber:formData.phonenumber || localStorage.getItem("phonenumber"),
        avatar: formData.avatar || localStorage.getItem("avatar"),
      
      };
      const id = localStorage.getItem("id");
      await axios
        .patch(`${process.env.REACT_APP_BACKEND_URL}/users/update/${id}`, form, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          toast.success(response.data.message);
          console.log(response);
          localStorage.setItem(
            "email",
            response.data.updatedRecord.email
          );
          localStorage.setItem(
            "username",
            response.data.updatedRecord.username
          );
          localStorage.setItem(
            "interest",
            response.data.updatedRecord.interest
          );
          localStorage.setItem("avatar", response.data.updatedRecord.avatar);
          localStorage.setItem(
            "phonenumber",
            response.data.updatedRecord.phonenumber
          );
        })
        .catch((err) => {
          throw new Error(`${err}`);
        });
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        getUser,
        forgotPassword,
        updateProfile,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
