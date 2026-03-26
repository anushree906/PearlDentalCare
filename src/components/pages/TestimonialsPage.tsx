import { Star, Quote } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: 32,
      treatment: "Root Canal Treatment",
      rating: 5,
      text: "I was absolutely terrified of getting a root canal, but Dr. Pooja and her team made the entire experience so comfortable. The procedure was completely painless, and the staff was incredibly supportive throughout. I highly recommend Pooja Dental Clinic to anyone who's nervous about dental work!",
      date: "January 2026"
    },
    {
      name: "Rajesh Kumar",
      age: 45,
      treatment: "Dental Implants",
      rating: 5,
      text: "After losing two teeth in an accident, I was very conscious about my smile. Dr. Pooja suggested dental implants, and I couldn't be happier with the results! The implants look and feel like natural teeth. The entire team was professional and caring. Worth every rupee!",
      date: "December 2025"
    },
    {
      name: "Anita Patel",
      age: 38,
      treatment: "Pediatric Dentistry",
      rating: 5,
      text: "My 6-year-old son was scared of dentists, but Dr. Amit was so patient and friendly with him. The clinic has a child-friendly environment, and they made the visit fun for my son. He actually looks forward to his dental checkups now! Thank you, team!",
      date: "January 2026"
    },
    {
      name: "Sanjay Verma",
      age: 28,
      treatment: "Teeth Whitening",
      rating: 5,
      text: "I got my teeth whitened for my wedding, and the results were amazing! My teeth are several shades whiter, and the procedure took just one session. The staff explained everything clearly, and the prices were very reasonable. Highly satisfied!",
      date: "November 2025"
    },
    {
      name: "Meera Reddy",
      age: 42,
      treatment: "Braces Treatment",
      rating: 5,
      text: "I always wanted straight teeth but thought I was too old for braces. Dr. Anjali gave me ceramic braces, and after 18 months, my teeth are perfectly aligned! The treatment was painless, and the staff was always available to answer my questions. So grateful!",
      date: "December 2025"
    },
    {
      name: "Vikram Singh",
      age: 35,
      treatment: "General Checkup",
      rating: 5,
      text: "The clinic is very clean and hygienic, which gave me confidence right away. The dental checkup was thorough, and Dr. Pooja explained everything in simple terms. The staff is friendly and professional. Will definitely return for future dental needs.",
      date: "January 2026"
    },
    {
      name: "Deepa Iyer",
      age: 51,
      treatment: "Gum Treatment",
      rating: 5,
      text: "I had bleeding gums and bad breath for years. After the gum treatment at Pooja Dental Clinic, my gums are healthy again! The deep cleaning was done gently, and they gave me great tips for maintaining oral hygiene. Very happy with the care I received.",
      date: "October 2025"
    },
    {
      name: "Arjun Malhotra",
      age: 29,
      treatment: "Smile Makeover",
      rating: 5,
      text: "I wanted a complete smile transformation, and Dr. Pooja delivered beyond my expectations! The combination of whitening, veneers, and bonding gave me the smile I always dreamed of. My confidence has increased tremendously. Thank you so much!",
      date: "November 2025"
    },
    {
      name: "Kavita Joshi",
      age: 40,
      treatment: "Emergency Dental Care",
      rating: 5,
      text: "I had a severe toothache late at night, and when I called their emergency number, they attended to me immediately. Dr. Rahul relieved my pain and treated the infection. I'm so grateful for their 24/7 availability and prompt service!",
      date: "January 2026"
    },
    {
      name: "Rohit Desai",
      age: 33,
      treatment: "Dental Cleaning",
      rating: 5,
      text: "The best dental cleaning I've ever had! The hygienist was gentle and thorough. My teeth feel so clean and fresh. The clinic uses modern equipment, and everything is well-maintained. I'll definitely be back for my next cleaning in 6 months.",
      date: "December 2025"
    },
    {
      name: "Sunita Nair",
      age: 47,
      treatment: "Dentures",
      rating: 5,
      text: "After losing several teeth, I was hesitant about getting dentures. But the team at Pooja Dental Clinic made the process easy and comfortable. My dentures fit perfectly and look very natural. I can eat and smile confidently again!",
      date: "September 2025"
    },
    {
      name: "Amit Gupta",
      age: 26,
      treatment: "Wisdom Tooth Extraction",
      rating: 5,
      text: "I was dreading my wisdom tooth extraction, but Dr. Rahul made it completely painless! The procedure was quick, and the aftercare instructions were very clear. Recovery was smooth with no complications. Excellent service!",
      date: "January 2026"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Patient <span className="text-teal-600">Testimonials</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real patients. Discover why thousands trust us with their smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">1,500+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-teal-100">
                  <Quote className="w-10 h-10" fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Treatment Badge */}
                <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.treatment}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Age {testimonial.age}</div>
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from our satisfied patients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-gray-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Patient Testimonial #{video}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Us on Google
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Read more reviews from our patients on Google
          </p>
          <a
            href="https://www.google.com/search?q=Pooja+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors"
          >
            View Google Reviews
          </a>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Had a great experience? We'd love to hear from you!
          </p>
          <a
            href="https://www.google.com/search?q=Pooja+Dental+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Write a Review
          </a>
        </div>
      </section>
    </div>
  );
}
