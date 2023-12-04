import React, { useState } from 'react';
import FormController from '../components/FormController';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import loginImage from '../images/login.svg';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submit);
  };

  return (
    <FormController>
      <div className="flex justify-center items-center h-screen p-6">
        {/* image section */}
        <div className="w-[700px] h-screen mb-14">
          <img src={loginImage} alt="login image" />
        </div>

        {/* form section */}
        <div className="flex flex-col justify-center items-center w-1/2 h-screen space-y-2 p-14">
          <div>
            <span>
              <FaUser className="text-[70px] text-amber-600" />
            </span>
            <h1 className="text-xl font-bold uppercase">Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            {/* Email section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-3/4">
                <label className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {' '}
                  <MdEmail />{' '}
                </label>
                <input
                  className="border rounded-full p-1 w-full pl-10 focus:outline-none focus:bg-gray-200"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-3/4">
                <label className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {' '}
                  <RiLockPasswordFill />{' '}
                </label>
                <input
                  className="border rounded-full p-1 w-full pl-10 focus:outline-none focus:bg-gray-200"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* button section */}
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="p-1 w-1/4 rounded-full bg-amber-600 font-bold uppercase text-md text-white transition duration-300 transform hover:bg-amber-700 hover:shadow-md focus:outline-none focus:ring focus:border-amber-700"
              >
                Log In
              </button>
            </div>

            {/* Go link to register page section */}
            <div className="flex justify-between items-center mt-10 ml-10">
              <p className="text-[15px] text-gray-600 ml-10">
                Don't have an account ?
              </p>
              <Link to={'/register'} className="text-md font-bold mr-16">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </FormController>
  );
}

export default LoginScreen;
