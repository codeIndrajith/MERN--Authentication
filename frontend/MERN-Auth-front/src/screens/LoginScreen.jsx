import React, { useEffect, useState } from 'react';
import FormController from '../components/FormController';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import loginImage from '../images/login.svg';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useLoginMutation } from '../slices/usersApiSlices';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <FormController>
      <div className="flex flex-col lg:w-full lg:h-screen sm:flex-row md:flex lg:mb-20 xl:w-full xl:h-screen justify-center items-center h-screen p-6">
        {/* image section */}
        <div className="flex flex-col justify-center items-center w-full sm:mb-48 md:w-[50%] md:p-2 lg:p-7 lg:h-screen lg:w-full xl:h-screen xl:w-full xl:mt-8 space-y-2">
          <img
            className="w-full h-[47vh] xl:h-screen xl:mt-14 md:w-full md:h-screen"
            src={loginImage}
            alt="login image"
          />
        </div>

        {/* form section */}
        <div className="flex flex-col justify-center items-center w-full sm:mb-48 md:w-[50%] lg:w-full lg:h-screen xl:w-full xl:h-screen md:p-2 lg:p-7 space-y-2">
          <div className="text-center">
            <span>
              <FaUser className="text-5xl md:text-[70px] text-amber-600" />
            </span>
            <h1 className="text-lg md:text-xl font-bold uppercase mt-2 md:mt-0 text-black">
              Sign In
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            {/* Email section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-full md:w-3/4">
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
              <div className="relative w-full md:w-3/4">
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

            {/* loading effect */}
            {isLoading && <Loader />}

            {/* button section */}
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="p-1 w-full md:w-1/2 rounded-full bg-amber-600 font-bold uppercase text-sm md:text-md text-black transition duration-300 transform hover:bg-amber-700 hover:shadow-md focus:outline-none focus:ring focus:border-amber-700"
              >
                Log In
              </button>
            </div>

            {/* Go link to register page section */}
            <div className="flex justify-between items-center mt-5 md:mt-10 ml-0 md:ml-10">
              <p className="text-xs md:text-sm text-black md:ml-0">
                Don't have an account?
              </p>
              <Link
                to="/register"
                className="text-sm md:text-md font-bold text-black"
              >
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
