import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last Name', type: 'text', autoComplete: 'family-name' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'Colin.delsink@gmail.com'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('sent');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      setStatus('error'); // form keeps its contents so nothing is lost
    });
  };

  const update = (name) => (e) => setFormData({ ...formData, [name]: e.target.value });
  const inputClass = 'h-11 rounded-xl bg-background px-4 text-base md:text-base';

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="mb-3 text-4xl font-semibold sm:text-5xl">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's talk</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-card p-6 sm:p-8" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label
                key={field.name}
                className={`block text-sm font-medium ${field.type === 'text' ? '' : 'sm:col-span-2'}`}
              >
                {field.label}
                <Input
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className={`mt-1.5 ${inputClass}`}
                  required
                  value={formData[field.name]}
                  onChange={update(field.name)}
                />
              </label>
            ))}

            <label className="block text-sm font-medium sm:col-span-2">
              Message
              <Textarea
                rows="5"
                className="mt-1.5 rounded-xl bg-background px-4 py-3 text-base md:text-base resize-none"
                required
                value={formData.message}
                onChange={update('message')}
              />
            </label>
          </div>

          <Button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 h-12 w-full rounded-full text-base"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </Button>

          <p role="status" className="mt-4 text-center text-sm empty:hidden">
            {status === 'sent' && "Message sent. I'll get back to you soon!"}
            {status === 'error' && (
              <span className="text-destructive">Your message couldn't be sent. Check your connection and try again.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
