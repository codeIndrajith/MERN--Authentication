import React from 'react';
import secure2 from '../images/secure2.svg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex justify-center items-center space-x-36 p-6 bg-green-400 h-screen">
      <div className="flex flex-col justify-center w-[40%] space-y-4">
        <div>
          <p className="text-4xl font-bold">MERN</p>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            doloremque cumque doloribus veniam. Ratione perferendis autem animi
            adipisci alias voluptate, neque necessitatibus, commodi optio
            numquam illo quae cum repellendus. Atque.
          </p>
        </div>
        <div className="space-x-3">
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

      <div className="w-[43%]">
        <img src={secure2} alt="" />
      </div>
    </div>
  );
}

export default Hero;
