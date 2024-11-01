import React from 'react';
import { Menu } from '@headlessui/react';

export const DropdownMenu = ({ children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {children}
    </Menu>
  );
};

export const DropdownMenuTrigger = ({ asChild, children }) => {
  return (
    <Menu.Button as={asChild ? 'div' : 'button'} className="focus:outline-none">
      {children}
    </Menu.Button>
  );
};

export const DropdownMenuContent = ({ className, children }) => {
  return (
    <Menu.Items className={`absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${className}`}>
      {children}
    </Menu.Items>
  );
};

export const DropdownMenuItem = ({ children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`flex w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-100' : 'text-gray-700'}`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
