import React, { useState, useEffect } from 'react';
import FormController from '../components/FormController';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import registerImage from '../images/register.svg';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdPerson } from 'react-icons/io';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlices';
import { setCredentials } from '../slices/authSlice';

function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <FormController>
      <div className="flex justify-center items-center h-screen p-6">
        {/* image section */}
        <div className="w-[700px] h-screen mb-14 flex justify-center items-center">
          <img src={registerImage} alt="register image" />
        </div>

        {/* form section */}
        <div className="flex flex-col justify-center items-center w-1/2 h-screen space-y-2 p-14">
          <div>
            <span>
              <FaUser className="text-[70px] text-amber-600" />
            </span>
            <h1 className="text-xl font-bold uppercase">Sign Up</h1>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            {/* Name section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-3/4">
                <label className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {' '}
                  <IoMdPerson />{' '}
                </label>
                <input
                  className="border rounded-full p-1 w-full pl-10 focus:outline-none focus:bg-gray-200"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

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
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {isLoading && <Loader />}

            {/* button section */}
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="p-1 w-1/4 rounded-full bg-amber-600 font-bold uppercase text-md text-white transition duration-300 transform hover:bg-amber-700 hover:shadow-md focus:outline-none focus:ring focus:border-amber-700"
              >
                Register
              </button>
            </div>

            {/* Go link to register page section */}
            <div className="flex justify-between items-center mt-10 ml-10">
              <p className="text-[15px] text-gray-600 ml-10">
                Already a member ?
              </p>
              <Link to={'/login'} className="text-md font-bold mr-16">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </FormController>
  );
}

export default LoginScreen;
