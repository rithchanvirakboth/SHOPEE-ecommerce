import React from 'react'
import Cardbox from '../../components/Cardbox/Cardbox'

const registerData = {
  title: 'Create an Account',
  formData: [
    {
      label: 'First Name',
      item: <input type="text" className="form-control" placeholder="First Name" />
    },
    {
      label: 'Last Name',
      item: <input type="text" className="form-control" placeholder="Last Name" />
    },
    {
      label: 'Username',
      item: <input type="text" className="form-control" placeholder="Username" />
    },
    {
      label: 'Email',
      item: <input type="email" className="form-control" placeholder="Email" />
    },
    {
      label: 'Password',
      item: <input type="password" className="form-control" placeholder="Password" />
    },
    {
      label: 'Confirm Password',
      item: <input type="password" className="form-control" placeholder="Confirm Password" />
    },
    {
      btnType: true,
      btn: <button type="submit" className="btn-submit">Register</button>
    }
  ]
}


function Registerpage() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <form>
            <Cardbox children={registerData} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registerpage