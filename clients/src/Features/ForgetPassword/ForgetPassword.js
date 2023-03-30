import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import { 
  ErrorMessage,
 SuccessMessage
} from '../../components/Notification/Notification';
import {
  isEmpty
} from '../../middleware/validation/Validation';
import axios from 'axios';

const initialState = {
  email: '',
  error: '',
  success: ''
}

function ForgetPassword() {
  const [data, setData] = useState(initialState);
  const { email, error, success } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      error: '',
      success: ''
    })
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if(isEmpty(email)) return setData({...data, error: 'Please enter your email', success: ''})

      const emailChecker = new RegExp(
        // eslint-disable-next-line no-useless-escape
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
      );
      if (!emailChecker.test(email)) {
        setData({
          ...data,
          error: "Invalid email address",
          success: "",
        });
      }

      const res = await axios.post('/user/forget_password', {email})
      if(res.data.email !== email) {
        setData({
          ...data,
          error: res.data.msg,
          success: ''
        })
      }
      
      setData({
        ...data,
        error: '',
        success: res.data.msg
      })

    }catch (error) {
      setData({
        ...data,
        error: error.response.data.msg,
        success: ''
      })   
    }
  }



  return (
    <div className="container d-flex justify-content-center">
    <div className="row">
      <div className="col-12 col-md-12 col-lg-12">
       <div className="mt-4">
       { success && SuccessMessage(success)}
        { error && ErrorMessage(error)}
       </div>
        <form onSubmit={handleSubmit}>
          <Card children={
            {
              title: "Forget Password",
                formData: [
                  {
                    label: "Resend Email",
                    item: (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email to reset password"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        id='email'
                      />
                    ),
                  },
                  {
                    btnType: true,
                    btn: (
                      <button type="submit" className="btn-submit">
                        Resend
                      </button>
                    ),
                  },
                ],
            }
          }
          />
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword;