import '../styles/contactForm.scss';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = "Demande de contact";
    const fullMessage = `${message}\n\nNom du contact : ${name}\nEmail de contact : ${email}`;
    const mailtoLink = `mailto:contact@digitale-syntropie.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="formContact" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="c_name"></label>
        <input
          id="c_name"
          type="text"
          name="c_name"
          placeholder="Nom"
          className="formContact__field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="c_email"></label>
        <input
          id="c_email"
          type="email"
          name="c_email"
          placeholder="Adresse email"
          className="formContact__field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="c_message"></label>
        <textarea
          id="c_message"
          name="body"
          placeholder="Votre message"
          className="formContact__field"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <input type="hidden" name="subject" value="Demande de contact" />
      <input className="formContact__field--submit" type="submit" value="Envoyer votre message" />
    </form>
  );
}

export default ContactForm;
