import React from 'react';

const Header = ({ onCompose }) => (
  <header className="flex justify-between items-center">
    <div>
        <h1 className="text-2xl font-bold">Email Threat Detection Demo</h1>
        <h2 className="text font-bold">AICC5201 - Machine & Deep Learning</h2>
    </div>
    <button
      onClick={onCompose}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
    >
      Compose Email
    </button>
  </header>
);

export default Header;