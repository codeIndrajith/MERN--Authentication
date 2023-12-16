import React from 'react';
import secure2 from '../images/secure2.svg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-center sm:w-full sm:h-screen md:w-full md:h-screen justify-between items-center space-x-4 bg-blue-300 w-full">
      <img
        className="w-full h-auto sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/2 mx-auto mb-4 sm:mb-0"
        src={secure2}
        alt=""
      />
      <div className="flex flex-col justify-center w-full sm:w-1/2 md:w-3/5 md:h-screen lg:w-2/3 xl:w-3/4 px-4">
        <div>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">MERN</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 sm:space-y-4">
          <p className="text-sm sm:text-base lg:text-lg sm:w-full">
            MERN authentication system ensures a secure user journey with JWT
            for authentication, encrypted tokens for identity verification, and
            HTTP cookies for persistent logins. The seamless experience is
            further enhanced by Redux Toolkit integration, providing efficient
            state management for a consistent application state.
          </p>
          <div className="space-x-2 sm:space-x-4 flex">
            <Link to="./login">
              <button className="bg-blue-600 text-white p-1 sm:p-2 px-2 sm:px-4 md:px-4">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-slate-500 text-white p-1 sm:p-2 px-2 sm:px-4">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
