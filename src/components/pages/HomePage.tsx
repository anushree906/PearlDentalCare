import { Link } from 'react-router-dom';
import { 
  Smile, 
  Award, 
  Clock, 
  Shield, 
  Heart,
  Sparkles,
  Syringe,
  Baby,
  Scissors,
  Stethoscope,
  Star
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomePage() {
  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Dentists",
      description: "15+ years of expert care"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pain-Free Treatment",
      description: "Gentle, comfortable care"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timings",
      description: "Open 7 days a week"
    }
  ];

  const treatments = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      name: "General Dentistry",
      description: "Regular checkups, cleaning, and fillings"
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      name: "Root Canal Treatment",
      description: "Pain-free RCT with advanced techniques"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      name: "Dental Implants",
      description: "Permanent solution for missing teeth"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      name: "Braces & Aligners",
      description: "Straighten teeth with modern options"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Teeth Whitening",
      description: "Bright, confident smile in one session"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      name: "Pediatric Dentistry",
      description: "Gentle dental care for children"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Best dental clinic in the area! The staff is friendly and the treatment was completely painless. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Rajesh Kumar",
      text: "I was scared of dentists, but Dr. Pooja and her team made me feel so comfortable. My root canal was painless!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Anita Patel",
      text: "Very clean clinic with modern equipment. The pediatric dentist was wonderful with my son. Great experience!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1719935769846-e41568d49dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Smile,<br />
                <span className="text-teal-600">Our Priority</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience world-class dental care in a comfortable, friendly environment. 
                We combine modern technology with a gentle touch to give you the smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors text-center"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Happy family at Pooja Dental Clinic"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Smile className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">10,000+</div>
                    <div className="text-sm text-gray-600">Happy Smiles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 text-teal-600">
                  {treatment.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{treatment.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                <Link to="/treatments" className="text-teal-600 font-medium text-sm hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/treatments"
              className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Modern dental clinic equipment"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Pooja Dental Clinic?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 text-teal-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hygiene First</h3>
                    <p className="text-gray-600 text-sm">Sterilized instruments and clean environment for your safety</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 text-teal-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Highly qualified dentists with years of experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 text-teal-600">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Patient Comfort</h3>
                    <p className="text-gray-600 text-sm">Pain-free procedures with the latest technology</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 text-teal-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Affordable Care</h3>
                    <p className="text-gray-600 text-sm">Quality treatment at reasonable prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real people
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Book your appointment today and experience the best dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}