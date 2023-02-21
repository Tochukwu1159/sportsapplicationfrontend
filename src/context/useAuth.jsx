import { useContext } from "react";
import { AuthContext } from "./authProvider";

export const UseAuth = () => {
  return useContext(AuthContext);
};
