import React, { useState } from 'react';
import Header from './components/Header';
import InboxList from './components/InboxList';
import EmailDetails from './components/EmailDetails';
import ComposeModal from './components/ComposeModal';
import useEmailData from './hooks/useEmailData';

function App() {
  const { emails, selectedEmail, setSelectedEmail, addEmail } = useEmailData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <Header onCompose={() => setIsModalOpen(true)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <InboxList emails={emails} onSelect={setSelectedEmail} />
        <EmailDetails email={selectedEmail} />
      </div>

      {isModalOpen && (
        <ComposeModal onClose={() => setIsModalOpen(false)} onSend={addEmail} />
      )}
    </div>
  );
}

export default App;
