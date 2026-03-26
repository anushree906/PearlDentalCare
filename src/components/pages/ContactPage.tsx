import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to backend
    console.log('Contact form:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a question or need to schedule an appointment? We're here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <a 
              href="tel:+919876543210"
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-teal-600 font-medium">+91 98765 43210</p>
              <p className="text-sm text-gray-600 mt-1">Mon-Sat: 9 AM - 8 PM</p>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">+91 98765 43210</p>
              <p className="text-sm text-gray-600 mt-1">Quick responses</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@poojadentalclinic.com"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600 font-medium text-sm">info@poojadentalclinic.com</p>
              <p className="text-sm text-gray-600 mt-1">24-48 hour response</p>
            </a>

            {/* Location */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-purple-600 font-medium text-sm">MG Road, Bangalore</p>
              <p className="text-sm text-gray-600 mt-1">Near City Mall</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Appointment Query</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="emergency">Emergency</option>
                        <option value="feedback">Feedback</option>
                        <option value="insurance">Insurance Query</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8234469847195!2d77.60252631482198!3d12.972442990861653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBrigade%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1644567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Pooja Dental Clinic Location"
                  />
                </div>
              </div>

              {/* Address & Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Visit Our Clinic
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pooja Dental Clinic<br />
                        123 MG Road, 2nd Floor<br />
                        Near City Mall, Opposite ABC Bank<br />
                        Bangalore - 560001, Karnataka
                      </p>
                      <a 
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 text-sm font-medium hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clinic Hours</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between gap-8">
                          <span className="text-gray-600">Monday - Friday</span>
                          <span className="text-gray-900 font-medium">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-gray-600">Saturday</span>
                          <span className="text-gray-900 font-medium">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-gray-600">Sunday</span>
                          <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <span className="font-semibold">Emergency:</span> Available 24/7
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Parking:</span> Free parking available at City Mall
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Dental Emergency? Call Us Now!
          </h3>
          <a
            href="tel:+919876543210"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            +91 98765 43210
          </a>
          <p className="text-red-100 mt-4">Available 24/7 for emergencies</p>
        </div>
      </section>
    </div>
  );
}
