import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Emergency Banner */}
      <div className="bg-teal-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Emergency: +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9 AM - 8 PM | Sun: 10 AM - 2 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Pooja Dental Clinic</h1>
              <p className="text-xs text-gray-600">Your Smile, Our Priority</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 bg-teal-600 text-white px-6 py-3 rounded-full font-medium text-center hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
