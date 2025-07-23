import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.text }}>
              Get In <span style={{ color: theme.colors.accent }}>Touch</span>
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.colors.accent }} />
            <p className="mt-6 text-lg max-w-3xl mx-auto" style={{ color: theme.colors.text + 'CC' }}>
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-8 shadow-lg border"
              style={{ 
                backgroundColor: theme.colors.cardBg,
                borderColor: theme.colors.accent + '30'
              }}
            >
              <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.accent }}>
                Send Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={64} className="mx-auto mb-4" style={{ color: theme.colors.accent }} />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.accent }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: theme.colors.text }}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2" style={{ color: theme.colors.text }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.accent + '30',
                          color: theme.colors.text
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium mb-2" style={{ color: theme.colors.text }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:outline-none"
                        style={{ 
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.accent + '30',
                          color: theme.colors.text
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-medium mb-2" style={{ color: theme.colors.text }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:outline-none"
                      style={{ 
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.accent + '30',
                        color: theme.colors.text
                      }}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium mb-2" style={{ color: theme.colors.text }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:outline-none resize-none"
                      style={{ 
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.accent + '30',
                        color: theme.colors.text
                      }}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      backgroundColor: theme.colors.accent,
                      color: theme.colors.primary
                    }}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div
                className="rounded-2xl p-8 shadow-lg border"
                style={{ 
                  backgroundColor: theme.colors.cardBg,
                  borderColor: theme.colors.accent + '30'
                }}
              >
                <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.accent }}>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: theme.colors.accent + '20' }}
                    >
                      <Mail size={24} style={{ color: theme.colors.accent }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text }}>Email</p>
                      <a
                        href="mailto:yogithashreedc@gmail.com"
                        className="text-sm hover:underline"
                        style={{ color: theme.colors.accent }}
                      >
                        yogithashreedc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: theme.colors.accent + '20' }}
                    >
                      <Phone size={24} style={{ color: theme.colors.accent }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text }}>Phone</p>
                      <a
                        href="tel:+919380376537"
                        className="text-sm hover:underline"
                        style={{ color: theme.colors.accent }}
                      >
                        +91 9380376537
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div
                      className="p-3 rounded-lg mr-4"
                      style={{ backgroundColor: theme.colors.accent + '20' }}
                    >
                      <MapPin size={24} style={{ color: theme.colors.accent }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: theme.colors.text }}>Location</p>
                      <p className="text-sm" style={{ color: theme.colors.text + 'CC' }}>
                        Mandya, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-8 shadow-lg border"
                style={{ 
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.accent + '30'
                }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.accent }}>
                  Let's Connect!
                </h3>
                <p style={{ color: theme.colors.text }}>
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and development !.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;