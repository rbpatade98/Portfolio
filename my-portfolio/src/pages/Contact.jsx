import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Not connected to backend)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container py-5">
        <h2 className="mb-4 animate">Contact</h2>
        <form onSubmit={handleSubmit} className="animate delay-1">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your Email"
              className="form-control"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="form-control"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
