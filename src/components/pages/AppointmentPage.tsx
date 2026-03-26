import { useState } from 'react';
import { Calendar, Clock, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

export function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to backend
    console.log('Appointment booking:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        treatment: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const treatments = [
    "General Checkup",
    "Root Canal Treatment (RCT)",
    "Dental Implants",
    "Braces & Aligners",
    "Teeth Whitening",
    "Smile Makeover",
    "Pediatric Dentistry",
    "Gum Treatment",
    "Emergency Dental Care"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Book Your <span className="text-teal-600">Appointment</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your visit at your convenience. We're here to help you achieve a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Fill in Your Details
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Appointment Requested!
                    </h3>
                    <p className="text-gray-600">
                      Thank you! We'll confirm your appointment shortly via call or WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            id="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                        Treatment Needed *
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        required
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select a treatment</option>
                        {treatments.map((treatment) => (
                          <option key={treatment} value={treatment}>{treatment}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                          placeholder="Any specific concerns or questions?"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Clinic Hours */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prefer to Call or Message?
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call Us</div>
                      <div className="font-semibold">+91 98765 43210</div>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp</div>
                      <div className="font-semibold">Book via WhatsApp</div>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@poojadentalclinic.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-semibold">info@poojadentalclinic.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-teal-600" />
                  Clinic Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-700">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-700">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-700">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">Emergency Services:</span> Available 24/7 - Call us anytime!
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Confirmation call within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Minimal waiting time at clinic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Clear treatment plan and cost estimate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
