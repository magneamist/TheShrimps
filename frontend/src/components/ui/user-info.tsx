"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

import Image from 'next/image';
import pfp from '../../../public/blank-profile.png'

const User = () => {

    const { user } = useUser();

  // State to manage visibility of each dropdown
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isDropdown3Open, setDropdown3Open] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown: number) => {
    if (dropdown === 1) {
      setDropdown1Open(!isDropdown1Open);
    } else if (dropdown === 2) {
      setDropdown2Open(!isDropdown2Open);
    } else if (dropdown === 3) {
      setDropdown3Open(!isDropdown3Open);
    }
  };

  return (
 <div className="w-full max-w-md mx-auto text-black font-sans">
  <Image src={pfp} alt="Profile Picture." className="w-32 h-32 rounded-full mx-auto my-5"/>
  <h2 className='block text-center my-2'>{user?.fullName}</h2>
  {/* User Info */}
  <div className="border-t border-b border-black mb-2">
    <button
      onClick={() => toggleDropdown(1)}
      className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium focus:outline-none"
    >
      User Information
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isDropdown1Open ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isDropdown1Open && (
      <ul className="px-4 pb-4 text-sm text-gray-700 space-y-2">
        <li>
          <p className="text-gray-500">User ID</p>
          <p>{user?.id}</p>
        </li>
        <li>
          <p className="text-gray-500">Username</p>
          <p>{user?.username}</p>
        </li>
      </ul>
    )}
  </div>

  {/* Items */}
  <div className="border-b border-black mb-2">
    <button
      onClick={() => toggleDropdown(2)}
      className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium focus:outline-none"
    >
      Selling
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isDropdown2Open ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isDropdown2Open && (
      <ul className="px-4 pb-4 text-sm text-gray-700">
        <p>Empty.</p>
      </ul>
    )}
  </div>

  {/* Empty */}
  <div className="border-b border-black">
    <button
      onClick={() => toggleDropdown(3)}
      className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium focus:outline-none"
    >
      Empty
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${
          isDropdown3Open ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isDropdown3Open && (
      <ul className="px-4 pb-4 text-sm text-gray-700">
        <p>Empty.</p>
      </ul>
    )}
  </div>
</div>
  );
};

export default User;
