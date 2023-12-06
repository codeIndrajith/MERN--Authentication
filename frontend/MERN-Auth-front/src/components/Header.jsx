// import React, { useEffect, useState, useRef } from 'react';
// import { GoSignIn } from 'react-icons/go';
// import { GoSignOut } from 'react-icons/go';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLogoutMutation } from '../slices/usersApiSlices';
// import { logout } from '../slices/authSlice';
// import { Link, useNavigate } from 'react-router-dom';

// function Header() {
//   const { userInfo } = useSelector((state) => state.auth);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleMenuItemClick = (url) => {
//     console.log(navigate);

//     setIsDropdownOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       // Clicked outside the dropdown, close it
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Add event listener when the component mounts
//     document.addEventListener('mousedown', handleClickOutside);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div
//       className="flex justify-between items-center px-10 bg-gray-800 p-2 text-white"
//       ref={dropdownRef}
//     >
//       <div className="font-bold text-2xl">
//         <Link to={'/'} className="font-bold text-[25px] cursor-pointer">
//           MERN Auth
//         </Link>
//       </div>
//       <div className="flex space-x-5 justify-center items-center">
//         {userInfo ? (
//           <>
//             <div className="relative inline-block text-left">
//               <div>
//                 <button
//                   type="button"
//                   className="inline-flex w-full justify-center gap-x-1.5 border-none text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-30"
//                   id="menu-button"
//                   aria-expanded="true"
//                   aria-haspopup="true"
//                   onClick={toggleDropdown}
//                 >
//                   {userInfo.name}
//                   <svg
//                     className="-mr-1 h-5 w-5 text-gray-400"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                       clip-rule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {isDropdownOpen && (
//                 <div
//                   className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="menu-button"
//                   tabindex="-1"
//                 >
//                   <div className="py-1" role="none">
//                     <a
//                       href="/profile"
//                       className="text-gray-700 block px-4 py-2 text-sm"
//                       role="menuitem"
//                       tabindex="-1"
//                       id="menu-item-0"
//                       onClick={() => handleMenuItemClick('/profile')}
//                     >
//                       Profile
//                     </a>
//                     <a
//                       className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
//                       role="menuitem"
//                       tabindex="-1"
//                       id="menu-item-1"
//                       onClick={() => logoutHandler()}
//                     >
//                       Logout
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <>
//             <div className=" p-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
//               <GoSignIn className="text-[15px] mr-2" />{' '}
//               <Link to={'./login'}>
//                 <p className="text-[17px]">Sign In</p>
//               </Link>
//             </div>

//             <div className="py-1 hover:shadow-lg cursor-pointer px-8 flex justify-center items-center">
//               <GoSignOut className="text-[15px] mr-2" />{' '}
//               <Link to={'/register'}>
//                 <p className="text-[17px]">Sign Up</p>
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useEffect, useState, useRef } from 'react';
import { GoSignIn } from 'react-icons/go';
import { GoSignOut } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlices';
import { logout } from '../slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (url) => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-800 p-2 text-white">
      <div className="flex justify-between items-center px-4 md:px-10">
        <div className="font-bold text-2xl mb-2 lg:mb-0">
          <Link to={'/'} className="font-bold text-[25px] cursor-pointer">
            MERN Auth
          </Link>
        </div>
        <div className="flex space-x-2 md:space-x-5 justify-center items-center">
          {userInfo ? (
            <>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 border-none text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-30"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    {userInfo.name}
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-36 md:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                    ref={dropdownRef}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="/profile"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => handleMenuItemClick('/profile')}
                      >
                        Profile
                      </a>
                      <a
                        className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => logoutHandler()}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className=" p-1 hover:shadow-lg cursor-pointer px-2 md:px-8 flex justify-center items-center">
                <GoSignIn className="text-[15px] md:text-base mr-2" />{' '}
                <Link to={'./login'}>
                  <p className="text-[13px] md:text-[17px]">Sign In</p>
                </Link>
              </div>

              <div className="py-1 hover:shadow-lg cursor-pointer px-2 md:px-8 flex justify-center items-center">
                <GoSignOut className="text-[15px] md:text-base mr-2" />{' '}
                <Link to={'/register'}>
                  <p className="text-[13px] md:text-[17px]">Sign Up</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
