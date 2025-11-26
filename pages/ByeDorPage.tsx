import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSupplement } from '../components/byedor/HeroSupplement';
import { BenefitsGrid } from '../components/byedor/BenefitsGrid';
import { IngredientsSection } from '../components/byedor/IngredientsSection';
import { PricingSection } from '../components/byedor/PricingSection';
import { SupplementTestimonials } from '../components/byedor/SupplementTestimonials';
import { SupplementFAQ } from '../components/byedor/SupplementFAQ';
import { SupplementAuthority } from '../components/byedor/SupplementAuthority';
import { GuaranteeBadge } from '../components/byedor/GuaranteeBadge';

export const ByeDorPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-premium-bg min-h-screen">
      <Header />
      <HeroSupplement />
      <BenefitsGrid />
      <IngredientsSection />
      <SupplementAuthority />
      <SupplementTestimonials />
      <PricingSection />
      <GuaranteeBadge />
      <SupplementFAQ />
      
      {/* Footer Específico */}
      <footer className="py-10 border-t border-white/5 bg-black text-center px-5">
        <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-xl text-white mb-4">BYE DOR</h3>
            <p className="text-premium-muted text-sm mb-6 max-w-md mx-auto">
                Desenvolvido especialmente para mulheres com fibromialgia, oferecendo alívio real e transformação.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-premium-muted mb-8">
                <span>📧 contato@byedor.com.br</span>
                <span>📱 (35) 98824-9443</span>
                <span>🕒 Seg a Sex: 9h às 18h</span>
            </div>
            <div className="text-xs text-white/20">
                © {new Date().getFullYear()} Bye Dor. Todos os direitos reservados.
            </div>
        </div>
      </footer>
    </main>
  );
};