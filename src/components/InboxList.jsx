import React from 'react';

const InboxList = ({ emails, onSelect }) => (
  <div className="bg-white rounded-xl shadow-md p-4 h-full">
    <h2 className="text-xl font-semibold mb-2">Inbox</h2>
    <ul>
      {emails.map((email, idx) => (
        <li
          key={idx}
          onClick={() => onSelect(email)}
          className="p-2 border-b hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">{email.subject}</span>
            <span className={`text-xs px-2 py-1 rounded ${email.isSpam ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
              {email.isSpam ? 'Spam' : 'Not Spam'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default InboxList;