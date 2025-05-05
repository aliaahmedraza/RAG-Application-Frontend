"use client";

import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {
  return (
    <div className="flex justify-end p-4 shadow-md">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Header;
