'use client'; // enables React hooks and client-side interactivity

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'pending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');

    if (!form.email || !form.message) {
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label>
          <span className="font-bold">Name</span>
          </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label> 
          <span className="font-bold">Email</span>{' '}
          <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label>
          <span className="font-bold">Message</span>{' '}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-gray-600 text-white rounded"
        disabled={status === 'pending'}
      >
        {status === 'pending' ? 'Sending…' : 'Send'}
      </button>

      {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-600">Failed to send message.</p>}
    </form>
  );
}
