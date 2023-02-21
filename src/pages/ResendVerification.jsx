import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

export const ResendVerification = () => {
  Swal.fire({
    title: "Verify your email",
    text: "Check your email for verification link or enter your email has not been verified, enter your email to resend verification link",
    input: "email",
    inputAttributes: {
      autocapitalize: "off",
      required: true,
    },
    showCancelButton: true,
    confirmButtonColor: ",#5a55dd",
    confirmButtonText: "Send verification link",
    showLoaderOnConfirm: true,
    customClass: "CustomSwal",
    preConfirm: (email) => {
      return axios
        .patch(`${process.env.REACT_APP_BACKEND_URL}/user/resendVerification`, { email })
        .then((response) => {
            console.log(response)
          if (!response.status === 200) {
            throw new Error(response.data.message);
          }
          return response;
        })
        .catch((error) => {
            console.log(error)
          Swal.showValidationMessage(`Request failed: ${error.response.data.message}`);
        });
    },

    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    console.log(result)
    if (result.value?.status === 200) {
        if(result.value.data.email_response.err){
            toast.error(result.value.data.email_response.message, {
                autoClose: 3000,
              });
        }else{
        toast.success(`${result.value.data.message}`, {
            autoClose: 3000,
          });
        }
      
    }
  });
};


