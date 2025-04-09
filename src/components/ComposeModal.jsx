import React, { useState } from 'react';

const ComposeModal = ({ onClose, onSend }) => {
  const [form, setForm] = useState({ from: 'Person A', to: 'Person B', subject: '', body: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: form.body }),
      });

      const data = await response.json();
      const isSpam = data.email_body_classification === 'phishing';
      const linkMatch = form.body.match(/https?:\/\/[\w./?=#]+/);

      const email = {
        ...form,
        isSpam,
        link: linkMatch ? linkMatch[0] : null,
        isMaliciousLink: isSpam && data.link_analysis?.prediction === '1'
      };

      onSend(email);
      onClose();
    } catch (error) {
      console.error('Error calling classification API:', error);
      alert('Failed to classify email.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/5 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Compose Email</h2>
        <input className="w-full mb-2 p-2 border rounded" name="subject" placeholder="Subject" onChange={handleChange} />
        <textarea className="w-full mb-2 p-2 border rounded" name="body" rows="5" placeholder="Write your message..." onChange={handleChange}></textarea>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ComposeModal;