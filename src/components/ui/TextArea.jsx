import React from 'react';

const TextArea = ({ label, id, rows = 4, ...props }) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-y"
        {...props}
      />
    </div>
  );
};

export default TextArea;
