import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [result, setResult] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${url}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data.content)
        setShowLoading(false);

        if (response.status === 200) {
          setResult(response.data);
          // console.log(result)

        }
      })
      .catch((err) => {
        console.log(err);
        setShowLoading(false);

        throw new Error(err);
      });
      // setShowLoading(false);


  }, [url]);
  return { result, showLoading };
};
export default useFetch;
