import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLoginModal } from '../../context/LoginModalContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoginOpen, setIsLoginOpen } = useLoginModal(); // context modal control
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      setMessage(res.data.message);
      setForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  const handleLogin = async () => {
    try {
      const { email, password } = form;
      const res = await axios.post('http://localhost:5000/api/login', { email, password });

      // ❌ Don't show success message
      // setMessage(res.data.message);

      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
      setIsLoginOpen(false); // close modal
      setForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' }); // reset form
      setMessage(''); // clear any old message
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMessage(''); // clear message on logout
    setForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' }); // clear form
    navigate('/');
  };

  return (
    <>
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
          DOCPAT
        </h1>

        {isLoggedIn ? (
          <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              setIsLoginOpen(true);
              setMessage(''); // clear message on open
              setForm({ name: '', email: '', mobile: '', password: '', confirmPassword: '' }); // optional: reset form
            }}
          >
            Login
          </button>
        )}
      </header>

      {isLoginOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-red-500 text-xl"
              onClick={() => {
                setIsLoginOpen(false);
                setIsSignup(false);
                setMessage('');
              }}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">{isSignup ? 'Sign Up' : 'Login'}</h2>

            {/* Only show message during signup */}
            {isSignup && message && <p className="text-green-600 mb-3 text-center">{message}</p>}

            {isSignup && (
              <>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full p-2 border mb-3 rounded"
                />
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile"
                  className="w-full p-2 border mb-3 rounded"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full p-2 border mb-3 rounded"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full p-2 border mb-3 rounded"
            />

            {isSignup && (
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-2 border mb-3 rounded"
              />
            )}

            <button
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
              onClick={isSignup ? handleSignup : handleLogin}
            >
              {isSignup ? 'Create Account' : 'Login'}
            </button>

            <p className="text-center mt-3 text-sm">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <span
                onClick={() => {
                  setIsSignup(!isSignup);
                  setMessage('');
                }}


             
                className="text-blue-600 cursor-pointer underline"
              >
                {isSignup ? 'Login here' : 'Sign up'}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );

};

export default Header;
