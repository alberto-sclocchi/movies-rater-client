import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthContext.context'

export default function LogInPage() {

  const { errorMessage, logIn, setErrorMessage } = useContext(AuthContext);
  const [ formData, setFormData ]= useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    setErrorMessage((prevState) => !!prevState ? null : prevState);
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    logIn(formData);
  }

  return (
    <div className="signup-page">
        <div className="error-message-div">{!!errorMessage && <p className='error-message'>{errorMessage}</p>}</div>
        <form className="signup-page-form" onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="text" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
  )
}
