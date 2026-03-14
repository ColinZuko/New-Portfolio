import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_pcbdhfg', // Replace with your EmailJS Service ID
      'template_q1hy19b', // Replace with your EmailJS Template ID
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'Colin.delsink@gmail.com' // Your email
      },
      '7VqZ3bFJV16zV1KhD' // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      alert('Hmmm something went wrong. Please try again.');
    });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? 'white' : '#1f2937',
            }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #228B22, #22c55e)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? '#d1d5db' : '#6b7280',
            }}
          >
            Let's talk
          </p>
        </div>

        <div className="flex justify-center">
          {/* Form */}
          <form
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg max-w-2xl w-full"
            data-aos="fade-left"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all mb-3 sm:mb-4"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all mb-3 sm:mb-4"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all mb-4 sm:mb-6 resize-none"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />

            <button
              type="submit"
              style={{
                background: 'linear-gradient(to right, #228B22, #22c55e)',
              }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] transition-all"
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className="mt-4 text-green-500 text-center">Your message was received successfully, I'll get back to you soon!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
