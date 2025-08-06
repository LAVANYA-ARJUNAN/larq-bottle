import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Router/NavBar';
import Footer from '../Router/Footer';

const Form = () => {
  const [formdata, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const validate = () => {
    const newError = {};
    if (!formdata.email) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formdata.email)) newError.email = "Invalid email format";

    if (!formdata.password) newError.password = "Password is required";
    else if (formdata.password.length < 7) newError.password = "Password should contain at least 7 characters";
    else if (!/[A-Z]/.test(formdata.password)) newError.password = "Password should contain at least one uppercase letter";
    else if (!/[a-z]/.test(formdata.password)) newError.password = "Password should contain at least one lowercase letter";
    else if (!/[0-9]/.test(formdata.password)) newError.password = "Password should contain numbers";

    return newError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length === 0) {
      console.log(formdata);
      setFormData({ email: '', password: '' });
      setError({});
    } else {
      setError(validateError);
    }
  };

  return (
    <div>
      <NavBar />

      <div className="container my-5 text-dark">
        <h1 className="mb-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* Sign In Form */}
            <div className="col-md-6 mb-4">
              <div className="mb-3">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />
                {error.email && <small className="text-danger">{error.email}</small>}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
                {error.password && <small className="text-danger">{error.password}</small>}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-dark px-4" type="submit">Sign In</button>
                <Link to="#" className="text-decoration-none text-secondary">Forgot Your Password?</Link>
              </div>
            </div>


            <div className="col-md-6 bg-light p-4">
              <h5>New Customer?</h5>
              <p className="mb-3">Create an account with us and you'll be able to:</p>
              <ul>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
              </ul>
              <Link to="/create">
                <button className="btn btn-dark mt-3 w-75">Create Account</button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Form;
