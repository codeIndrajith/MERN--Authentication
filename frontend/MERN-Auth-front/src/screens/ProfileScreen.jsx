import React, { useState, useEffect } from 'react';
import FormController from '../components/FormController';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import updateImage from '../images/update.svg';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../slices/usersApiSlices';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';

function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password does not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo.id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile updated');
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <FormController>
      <div className="flex flex-col h-[125vh] lg:w-full lg:h-screen sm:flex-row md:flex lg:mb-20 xl:w-full xl:h-screen justify-center items-center p-6">
        {/* image section */}
        <div className="flex flex-col justify-center items-center w-full h-screen sm:mb-[5rem] md:mb-auto xl:mb-20 md:w-[45%] sm:w-[120%] md:p-2 lg:p-7 lg:h-screen lg:w-full xl:h-[100%] xl:w-full xl:mt-8 space-y-2">
          <img
            className="w-full h-[47vh] xl:h-[90%] xl:mt-14 md:w-full md:h-screen sm"
            src={updateImage}
            alt="Update image"
          />
        </div>

        {/* form section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-2 p-4 md:p-[0.5rem]">
          <div className="flex flex-col justify-center items-center">
            <span>
              <FaUser className="text-5xl md:text-[70px] text-amber-600" />
            </span>
            <h1 className="text-lg md:text-xl font-bold uppercase mt-2 md:mt-0">
              Update Profile
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            {/* Name section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-full md:w-3/4">
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

            {/* Confirm Password section */}
            <div className="flex justify-center items-center space-x-3 p-1">
              <div className="relative w-full md:w-3/4">
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
                className="p-1 w-full md:w-1/2 rounded-full bg-amber-600 font-bold uppercase text-sm md:text-md text-white transition duration-300 transform hover:bg-amber-700 hover:shadow-md focus:outline-none focus:ring focus:border-amber-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormController>
  );
}

export default ProfileScreen;
