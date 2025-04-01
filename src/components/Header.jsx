import React from 'react';

const Header = ({ onCompose }) => (
  <header className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">Spam Classifier Mail</h1>
    <button
      onClick={onCompose}
      className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
    >
      Compose Email
    </button>
  </header>
);

export default Header;