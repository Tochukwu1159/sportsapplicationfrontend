import React, { useState } from "react";
//eslint-disable-next-line
import axios from "axios";
import "./uploadAvatar.css";

export default function UploadAvatar() {
  //eslint-disable-next-line
  const [fileImage, setFileImage] = useState("");

  const uploadAvatar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileImage);
    formData.append("upload_preset", "sprint2");
    //   formData.append("myAvatar", "uujk0ogg");
    console.log(fileImage);
    console.log(formData);
    try {
      const res = await axios.post(
        "http://api.cloudinary.com/v1_1/podf-live-project/image/upload",
        formData
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Upload Avatar</h2>

      <form>
        <input
          type={"file"}
          onChange={(e) => setFileImage(e.target.files[0])}
        />
        <button type={"submit"} onClick={uploadAvatar}>
          Upload
        </button>
      </form>
    </>
  );
}
