import React from 'react';
import { GoSignIn } from 'react-icons/go';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-800 p-2 text-white">
      <div className="font-bold text-2xl">
        <Link to={'/'} className="font-bold text-[25px] cursor-pointer">
          MERN Auth
        </Link>
      </div>
      <div className="flex space-x-5 justify-center items-center">
        <div className=" p-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
          <GoSignIn className="text-[15px] mr-2" />{' '}
          <Link to={'./login'}>
            <p className="text-[17px]">Sign In</p>
          </Link>
        </div>

        <div className="py-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
          <GoSignOut className="text-[15px] mr-2" />{' '}
          <Link to={'/register'}>
            <p className="text-[17px]">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
