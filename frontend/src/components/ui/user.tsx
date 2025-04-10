"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

const Dropdowns = () => {

    const { user } = useUser();
    console.log(user);

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
    <div>
      <button onClick={() => toggleDropdown(1)}>User Information</button>
      {isDropdown1Open && (
        <ul>
          <li>
            <p>User ID</p>
            {user?.id}
          </li>
          <li>
            <p>Username</p>
            {user?.username}
          </li>
        </ul>
      )}

      <button onClick={() => toggleDropdown(2)}>Items</button>
      {isDropdown2Open && (
        <ul>
            <p>Empty.</p>
        </ul>
      )}

      <button onClick={() => toggleDropdown(3)}>Empty.</button>
      {isDropdown3Open && (
        <ul>
            <p>Empty.</p>
        </ul>
      )}
    </div>
  );
};

export default Dropdowns;
