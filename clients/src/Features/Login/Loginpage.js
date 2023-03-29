import React from 'react'
import Cardbox from '../../components/Cardbox/Cardbox'

const loginData = {
  title: 'Sign In',
  formData: [
    {
      label: 'Email',
      item: <input type="email" className="form-control" placeholder="Email" />
    },
    {
      label: 'Password',
      item: <input type="password" className="form-control" placeholder="Password" />
    },
    {
      btnType: true,
      btn: <button type="submit" className="btn-submit">Login</button>
    }
  ]
}


function Loginpage() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <form>
            <Cardbox children={loginData} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Loginpage