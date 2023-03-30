import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage, SuccessMessage } from "../../components/Notification/Notification";
import axios from "axios";

function EmailActivate() {
  const { activation_token } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [timeOut, setTimeOut] = useState('');
  
  useEffect(() => {
    if (activation_token) {
      const activateEmail = async () => {
        try {
          const res = await axios.post('/user/activated', {
            activation_token,
          });

          setSuccess(res.data.msg);
        } catch (error) {
          error.response.data.msg && setError(error.response.data.msg);
        }
      };
      activateEmail();

      setTimeOut(setTimeout(() => {
        window.close();
      }
      , 1500));
    }
  }, [activation_token], [timeOut]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-4">
        { success && SuccessMessage(success) }
        { error && ErrorMessage(error) }
      </div>
    </div>
  );
}

export default EmailActivate;
