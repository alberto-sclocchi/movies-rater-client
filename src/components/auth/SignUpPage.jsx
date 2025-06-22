import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthContext.context';

export default function SignUpPage() {

  const { errorMessage, signUp } = useContext(AuthContext);
  
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  })


  const handleChange = (event) => {
    const { value, name} = event.target;

    setFormData((prevState) => ({...prevState, [name]: value}));

    console.log("data", formData);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const formatData = {
        name: formData.firstName + "  " + formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password
    }

    signUp(formatData);
  
  }



  return (
    <div className="signup-page">
        <div className="error-message-div">{!!errorMessage && <p className='error-message'>{errorMessage}</p>}</div>
        <form className="signup-page-form" onSubmit={handleSubmit}>
            <div id="name-div">
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"  name="lastName" value={formData.lastName} onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
  )
}
