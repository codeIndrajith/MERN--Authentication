import React from 'react';
import secure2 from '../images/secure2.svg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col p-2 sm:flex-row sm:items-center justify-between items-center space-x-36 bg-green-400 w-full h-screen">
      <img className="w-[75%] h-screen" src={secure2} alt="" />
      <div className="flex flex-col justify-center w-full pr-[72px] h-full space-y-4 pb-10">
        <div>
          <p className="text-4xl font-bold">MERN</p>
        </div>
        <div>
          <p className="lg:text-lg">
            MERN authentication system ensures a secure user journey with JWT
            for authentication, encrypted tokens for identity verification, and
            HTTP cookies for persistent logins. The seamless experience is
            further enhanced by Redux Toolkit integration, providing efficient
            state management for a consistent application state.
          </p>
        </div>
        <div className="space-x-5">
          <Link to={'./login'}>
            <button className="border-none bg-blue-600 p-2 text-white px-4 pr-8 pl-8">
              Sign In
            </button>
          </Link>
          <Link to={'/register'}>
            <button className="border-none bg-slate-500 p-2 text-white px-4 pr-8 pl-8">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
