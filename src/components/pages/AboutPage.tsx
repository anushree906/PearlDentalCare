import { Award, Heart, Shield, Users, CheckCircle, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const dentists = [
    {
      name: "Dr. Pooja Mehta",
      qualification: "BDS, MDS (Prosthodontics)",
      experience: "15+ years",
      specialization: "Cosmetic Dentistry, Implants, Smile Makeover",
      image: "https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Dr. Rahul Sharma",
      qualification: "BDS, MDS (Endodontics)",
      experience: "12+ years",
      specialization: "Root Canal Treatment, Pain Management",
      image: "https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Dr. Anjali Singh",
      qualification: "BDS, MDS (Orthodontics)",
      experience: "10+ years",
      specialization: "Braces, Aligners, Jaw Correction",
      image: "https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Dr. Amit Patel",
      qualification: "BDS, MDS (Pediatric Dentistry)",
      experience: "8+ years",
      specialization: "Children's Dental Care, Preventive Dentistry",
      image: "https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient-Centered Care",
      description: "Your comfort and well-being are our top priorities. We listen to your concerns and customize treatment plans just for you."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hygiene & Safety",
      description: "We follow strict sterilization protocols and maintain the highest standards of cleanliness for your safety."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We stay updated with the latest techniques and technologies to provide you with the best possible care."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Transparency",
      description: "We believe in honest communication about treatment options, costs, and expected outcomes."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Patients Treated" },
    { number: "15+", label: "Years of Service" },
    { number: "4.9/5", label: "Patient Rating" },
    { number: "25+", label: "Team Members" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-teal-600">Pooja Dental Clinic</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established in 2011, Pooja Dental Clinic has been serving the community with 
              dedication, compassion, and expertise. We are committed to making dental care 
              accessible, comfortable, and effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pooja Dental Clinic was founded with a simple yet powerful vision: to create 
                a dental practice where patients feel cared for, not just treated. Dr. Pooja 
                Mehta, our founder and lead dentist, noticed that many people avoided dental 
                care due to fear and anxiety.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                That's why we built a clinic that focuses on patient comfort, gentle techniques, 
                and clear communication. Over the years, we've grown from a single-chair practice 
                to a comprehensive dental care center with multiple specialists.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be one of the most trusted dental clinics in the area, 
                known for our compassionate care and exceptional results.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Pooja Dental Clinic interior"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 text-teal-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class dental care that is accessible, comfortable, and effective. 
                We strive to help every patient achieve optimal oral health and a confident smile 
                through personalized treatment and compassionate care.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental care provider in India, recognized for our innovation, 
                patient-centric approach, and exceptional outcomes. We envision a future where 
                dental care is stress-free and everyone has access to quality treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-teal-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Dentists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified professionals dedicated to your dental health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dentists.map((dentist, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-400 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-5xl font-bold">
                    {dentist.name.charAt(4)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{dentist.name}</h3>
                  <p className="text-sm text-teal-600 mb-2">{dentist.qualification}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Award className="w-4 h-4" />
                    <span>{dentist.experience}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Specialization:</span><br />
                    {dentist.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Patients Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">Experienced team with proven track record</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">State-of-the-art equipment and technology</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">Pain-free and gentle treatment approach</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">Transparent pricing with no hidden costs</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">Flexible appointment timings including weekends</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">Emergency dental services available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
