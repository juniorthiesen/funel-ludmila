import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AuthoritySection } from './components/AuthoritySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { CustomCursor } from './components/CustomCursor';
import { Quiz } from './components/Quiz';
import { ByeDorPage } from './pages/ByeDorPage';
import { Offer10DaysPage } from './pages/Offer10DaysPage';
import { UpsellByeDorPage } from './pages/UpsellByeDorPage';
import { DownsellByeDorPage } from './pages/DownsellByeDorPage';
import { UpsellProtocoloPage } from './pages/UpsellProtocoloPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { Analytics } from './utils/analytics';

const LandingPage = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AuthoritySection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
    </main>
  );
};

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <PageTracker />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/oferta-10-dias" element={<Offer10DaysPage />} />
        <Route path="/upsell-byedor" element={<UpsellByeDorPage />} />
        <Route path="/downsell-byedor" element={<DownsellByeDorPage />} />
        <Route path="/upsell-protocolo" element={<UpsellProtocoloPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="/byedor" element={<ByeDorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;