import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121212] text-black dark:text-white focus:bg-white dark:focus:bg-[#161616] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        {...props}
      />
    </div>
  );
};

export default Input;
