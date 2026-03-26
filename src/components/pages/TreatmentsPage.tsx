import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Syringe, 
  Smile, 
  Scissors, 
  Sparkles, 
  Baby,
  Activity,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

export function TreatmentsPage() {
  const treatments = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      name: "General Dentistry",
      description: "Complete oral health care for the whole family",
      details: "Regular dental checkups, professional cleaning, cavity fillings, and preventive care to keep your teeth and gums healthy.",
      benefits: [
        "Early detection of dental problems",
        "Prevention of cavities and gum disease",
        "Fresh breath and clean teeth",
        "Maintain overall oral health"
      ],
      whoNeeds: "Everyone should visit the dentist every 6 months for routine checkups",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      name: "Root Canal Treatment (RCT)",
      description: "Pain-free solution to save your natural tooth",
      details: "Advanced root canal therapy using modern techniques and equipment. We remove infected pulp, clean the canal, and seal it to save your tooth.",
      benefits: [
        "Save your natural tooth",
        "Completely painless procedure",
        "Stop tooth pain and infection",
        "Restore normal chewing function"
      ],
      whoNeeds: "Anyone with severe tooth pain, sensitivity, or infection",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      name: "Dental Implants",
      description: "Permanent replacement for missing teeth",
      details: "High-quality titanium implants that look, feel, and function like natural teeth. A long-lasting solution for tooth loss.",
      benefits: [
        "Look and feel like natural teeth",
        "Last a lifetime with proper care",
        "Prevent bone loss in jaw",
        "Restore confident smile"
      ],
      whoNeeds: "Anyone with one or more missing teeth",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      name: "Braces & Aligners",
      description: "Straighten your teeth with modern orthodontics",
      details: "Traditional metal braces, ceramic braces, and clear aligners (like Invisalign) to correct misaligned teeth and bite issues.",
      benefits: [
        "Straight, beautiful teeth",
        "Improved bite function",
        "Better oral hygiene",
        "Boost self-confidence"
      ],
      whoNeeds: "Anyone with crooked, crowded, or misaligned teeth",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Teeth Whitening",
      description: "Get a brighter, whiter smile in just one session",
      details: "Professional teeth whitening treatment that removes stains and discoloration, giving you a radiant smile.",
      benefits: [
        "Visible results in one visit",
        "Safe and effective procedure",
        "Remove years of stains",
        "Enhance your appearance"
      ],
      whoNeeds: "Anyone with stained, discolored, or yellowing teeth",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      name: "Pediatric Dentistry",
      description: "Gentle dental care for children",
      details: "Specialized dental care for children in a fun, friendly environment. We make dental visits enjoyable for kids.",
      benefits: [
        "Build good dental habits early",
        "Prevent childhood cavities",
        "Child-friendly environment",
        "Reduce dental anxiety"
      ],
      whoNeeds: "All children from age 1 to 18 years",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      name: "Gum Treatment",
      description: "Treat and prevent gum disease",
      details: "Comprehensive periodontal care including deep cleaning, scaling, and surgery if needed to treat gum disease and inflammation.",
      benefits: [
        "Prevent tooth loss",
        "Reduce gum bleeding",
        "Eliminate bad breath",
        "Restore healthy gums"
      ],
      whoNeeds: "Anyone with bleeding gums, swollen gums, or bad breath",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Smile Makeover",
      description: "Complete cosmetic transformation",
      details: "Comprehensive cosmetic dentistry including veneers, bonding, whitening, and contouring to give you your dream smile.",
      benefits: [
        "Complete smile transformation",
        "Customized treatment plan",
        "Boost confidence dramatically",
        "Natural-looking results"
      ],
      whoNeeds: "Anyone looking to improve their smile aesthetics",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-600">Dental Treatments</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental solutions for all your oral health needs. 
              From routine checkups to advanced cosmetic procedures, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Icon Section */}
                  <div className={`lg:col-span-1 bg-gradient-to-br ${treatment.color} p-8 flex items-center justify-center`}>
                    <div className="text-white">
                      {treatment.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-4 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {treatment.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {treatment.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {treatment.details}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-teal-600" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Who Needs It */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-teal-600" />
                          Who Needs This?
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {treatment.whoNeeds}
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/appointment"
                      className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Latest Technology
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use state-of-the-art equipment and modern techniques for the best results
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Pain-Free Procedures
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced pain management techniques ensure comfortable treatment experience
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Expert Specialists
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experienced dentists specializing in each treatment area for optimal care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Book a free consultation and our experts will guide you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
