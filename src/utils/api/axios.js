import axios from "axios";
//kk
export default axios.create({
  baseURL: process.env.BASE_URL,
});
