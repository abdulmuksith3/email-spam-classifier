import { useState } from 'react';

const useEmailData = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const addEmail = (email) => {
    setEmails(prev => [email, ...prev]);
  };

  return {
    emails,
    selectedEmail,
    setSelectedEmail,
    addEmail
  };
};

export default useEmailData;