'use client';

import React from 'react';

function About() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>
      <button 
        onClick={handleClick} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click Me
      </button>
    </div>
  );
}

export default About;
