import React from 'react';
import { GoSignIn } from 'react-icons/go';
import { GoSignOut } from 'react-icons/go';

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-800 p-2 text-white">
      <div className="font-bold text-2xl">Authentication</div>
      <div className="flex space-x-5 justify-center items-center">
        <div className=" p-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
          <GoSignIn className="text-[15px] mr-2" />{' '}
          <p className="text-[20px]">Sign In</p>
        </div>

        <div className="py-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
          <GoSignOut className="text-[15px] mr-2" />{' '}
          <p className="text-[20px]">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
