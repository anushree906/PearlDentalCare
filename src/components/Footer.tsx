import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="font-bold text-white text-lg">Pooja Dental Clinic</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Providing world-class dental care with a gentle touch. Your smile is our success.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-teal-400 transition-colors">Treatments</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-teal-400 transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 transition-colors">Root Canal Treatment</li>
              <li className="hover:text-teal-400 transition-colors">Dental Implants</li>
              <li className="hover:text-teal-400 transition-colors">Braces & Aligners</li>
              <li className="hover:text-teal-400 transition-colors">Teeth Whitening</li>
              <li className="hover:text-teal-400 transition-colors">Smile Makeover</li>
              <li className="hover:text-teal-400 transition-colors">Pediatric Dentistry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <span>123 MG Road, Near City Mall, Bangalore - 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href="tel:+919876543210" className="hover:text-teal-400">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href="mailto:info@poojadentalclinic.com" className="hover:text-teal-400">info@poojadentalclinic.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <div>
                  <div>Mon-Sat: 9 AM - 8 PM</div>
                  <div>Sun: 10 AM - 2 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Pooja Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
