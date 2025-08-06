import React from 'react'
import NavBar from '../Router/NavBar'
import Footer from '../Router/Footer'
import '../Contents/create.css'
const Create = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="update-container">
        <h1 id="head">Create Account</h1>
        <form className="update-form">
          <label>Name</label>
          <input type="text" name="name" className="form-control input-field" />

          <label>Email Address</label>
          <input type="text" name="email" className="form-control input-field" />

          <label>Password</label>
          <input type="password" name="password" className="form-control input-field" />
          <label>Phone Number</label>
          <input type='number' name='number' className='form-control input-field' />

          <button type="submit" className="submit-btn">Create</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Create
