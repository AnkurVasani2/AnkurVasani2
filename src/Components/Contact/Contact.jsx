import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_0ozsrad'; // Your EmailJS service ID
    const templateID = 'template_z5k64l3'; // Your EmailJS template ID
    const userID = 'mA991cya-aGEA-rFr'; // Your EmailJS user ID (replace with your actual ID)

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        setLoading(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form data
        alert('Email sent successfully!');
        console.log(result.text); // For debugging
      }, (error) => {
        setLoading(false);
        alert('Failed to send email. Please try again.');
        console.error(error.text); // For debugging
      });
  };

  return (
    <div className="Contact">
      <div className="head">
        <span>Get in Touch</span>
        <h1>Contact Me</h1>
      </div>
      <div className="Contact-Container">
        <div className="Contact-Container-Left">
          <div className="Contact-Container-Left-Top">
            <span className='span'>Connect through</span>
            <h2>Socials</h2>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/ankurmvasani" className="icon" target='_blank' rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ankurvasani_25" className="icon" target='_blank' rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ankurvasani_25" className="icon" target='_blank' rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="icon-container">
              <a href="mailto:ankurvasani2585@gmail.com" className="icon">
                <i className="fas fa-envelope"></i>
                <span className="tooltip">ankurvasani2585@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <div className="Contact-right-top">
            <span className='span'>Leave a Message</span>
            <h2>Reach Me</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><input type="email" name="email" value={formData.email} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td><textarea name="message" rows="4" value={formData.message} onChange={handleChange} required /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit" className='email' disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
