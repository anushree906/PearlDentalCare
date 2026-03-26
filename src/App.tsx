import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTopButton } from './components/ScrollToTop';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { TreatmentsPage } from './components/pages/TreatmentsPage';
import { AppointmentPage } from './components/pages/AppointmentPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { ContactPage } from './components/pages/ContactPage';
import { FAQPage } from './components/pages/FAQPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}