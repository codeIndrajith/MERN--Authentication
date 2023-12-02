import React from 'react';
import secure2 from '../images/secure2.svg';

function Hero() {
  return (
    <div className="flex justify-center items-center space-x-36 p-6 bg-green-400 h-screen">
      <div className="flex flex-col justify-center w-[40%]">
        <div>
          <p className="text-4xl font-bold">Secure MERN</p>
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
          <button className="border-none bg-blue-600 p-2 rounded-lg text-white px-4">
            Sign In
          </button>
          <button className="border-none bg-slate-500 p-2 rounded-lg text-white px-4">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-[43%]">
        <img src={secure2} alt="" />
      </div>
    </div>
  );
}

export default Hero;
