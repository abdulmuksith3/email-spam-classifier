import React from 'react';

const EmailDetails = ({ email }) => {
  if (!email) return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <p>Select an email to view details</p>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">Email Details</h2>
      <p><strong>From:</strong> {email.from}</p>
      <p><strong>To:</strong> {email.to}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      <div className="my-2 p-2 border rounded bg-gray-50 whitespace-pre-wrap">{email.body}</div>
      <div className={`mt-2 p-2 rounded ${email.isSpam ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
        {email.isSpam ? '🚫 This email is classified as SPAM' : '✅ This email is NOT SPAM'}
      </div>
    </div>
  );
};

export default EmailDetails;