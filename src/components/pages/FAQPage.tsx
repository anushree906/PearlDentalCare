import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "How often should I visit the dentist?",
          answer: "We recommend visiting the dentist every 6 months for a routine checkup and cleaning. This helps catch problems early and maintain good oral health. However, if you have specific dental issues, your dentist may suggest more frequent visits."
        },
        {
          question: "Do you treat children?",
          answer: "Yes! We have a specialized pediatric dentist, Dr. Amit Patel, who is trained to work with children. Our clinic has a child-friendly environment, and we make dental visits fun and comfortable for kids of all ages, from toddlers to teenagers."
        },
        {
          question: "What are your clinic timings?",
          answer: "We're open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 2:00 PM. We also offer emergency dental services 24/7. Just call our emergency number: +91 98765 43210."
        },
        {
          question: "Do you accept dental insurance?",
          answer: "Yes, we accept most major dental insurance plans. We can help you understand your coverage and file claims on your behalf. Please bring your insurance card during your first visit so we can verify your benefits."
        }
      ]
    },
    {
      category: "Treatment-Related",
      questions: [
        {
          question: "Is root canal treatment painful?",
          answer: "Not at all! Root canal treatment gets a bad reputation, but with modern techniques and anesthesia, the procedure is completely painless. Most patients report feeling comfortable throughout. We use advanced equipment and gentle techniques to ensure your comfort."
        },
        {
          question: "How long does teeth whitening last?",
          answer: "Professional teeth whitening results typically last 1-3 years, depending on your lifestyle habits. Avoiding staining foods and beverages (coffee, tea, red wine) and maintaining good oral hygiene can help your results last longer. We also offer touch-up treatments."
        },
        {
          question: "Are dental implants safe?",
          answer: "Yes, dental implants are very safe and have a success rate of over 95%. They're made of biocompatible titanium that fuses with your jawbone. Implants are a long-lasting, permanent solution for missing teeth and can last a lifetime with proper care."
        },
        {
          question: "How long does it take to get braces results?",
          answer: "Treatment time varies depending on the complexity of your case, but most patients wear braces for 12-24 months. We also offer clear aligners as an alternative, which may work faster for mild to moderate cases. We'll give you a personalized timeline during your consultation."
        },
        {
          question: "What is the cost of dental treatments?",
          answer: "Treatment costs vary depending on the procedure and your specific needs. We believe in transparent pricing and will provide you with a detailed cost estimate before starting any treatment. We also offer flexible payment plans to make quality dental care affordable."
        }
      ]
    },
    {
      category: "Before Your Visit",
      questions: [
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring a valid ID, your insurance card (if applicable), a list of any medications you're taking, and any previous dental records if available. If you're a new patient, arrive 10 minutes early to complete paperwork."
        },
        {
          question: "Can I eat before my dental appointment?",
          answer: "Yes, you can eat normally before most dental appointments. In fact, we recommend having a light meal beforehand. However, if you're scheduled for a procedure requiring sedation, we'll give you specific fasting instructions."
        },
        {
          question: "How do I book an appointment?",
          answer: "You can book an appointment in three easy ways: 1) Fill out our online appointment form, 2) Call us at +91 98765 43210, or 3) Send us a message on WhatsApp. We'll confirm your appointment within 2 hours."
        }
      ]
    },
    {
      category: "Emergency Care",
      questions: [
        {
          question: "What counts as a dental emergency?",
          answer: "Dental emergencies include severe toothache, broken or knocked-out teeth, bleeding that won't stop, swollen jaw or face, and abscesses. If you're experiencing any of these, call our emergency number immediately: +91 98765 43210. We're available 24/7."
        },
        {
          question: "What should I do if my tooth gets knocked out?",
          answer: "If a tooth is knocked out, handle it by the crown (not the root), gently rinse it with water (don't scrub), and try to place it back in the socket if possible. If not, keep it in milk or saliva and come to our clinic immediately. Time is critical - the sooner we see you, the better chance of saving the tooth."
        }
      ]
    },
    {
      category: "Hygiene & Safety",
      questions: [
        {
          question: "How do you ensure hygiene and safety?",
          answer: "Patient safety is our top priority. We follow strict sterilization protocols for all instruments, use disposable items where possible, maintain a clean environment, and our staff follows all infection control guidelines. All equipment is sterilized using autoclaves after each use."
        },
        {
          question: "Do you use digital X-rays?",
          answer: "Yes, we use digital X-rays which emit 90% less radiation than traditional X-rays and provide instant, high-quality images. This technology is safer for you and helps us diagnose problems more accurately."
        }
      ]
    },
    {
      category: "Payment & Insurance",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit/debit cards, UPI payments, and bank transfers. We also offer flexible payment plans for expensive treatments like implants and smile makeovers."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We understand that some dental treatments can be expensive. We offer interest-free payment plans for treatments costing above ₹20,000. Speak with our front desk staff to learn more about our flexible payment options."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-teal-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our dental services, treatments, and clinic policies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-gray-50 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                            openIndex === currentIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openIndex === currentIndex && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors"
            >
              Call Us: +91 98765 43210
            </a>
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

      {/* Quick Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Dental Care Tips
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🪥
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brush Twice Daily</h3>
              <p className="text-sm text-gray-600">
                Brush for 2 minutes in the morning and before bed using fluoride toothpaste
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🦷
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Floss Daily</h3>
              <p className="text-sm text-gray-600">
                Flossing removes plaque and food particles from between teeth
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🍎
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Eat Healthy</h3>
              <p className="text-sm text-gray-600">
                Limit sugary foods and drinks, eat calcium-rich foods for strong teeth
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
