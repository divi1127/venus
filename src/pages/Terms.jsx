import React from 'react';
import SectionReveal from '../components/SectionReveal';

const Terms = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50 blueprint-bg-fine text-center">
        <div className="max-w-4xl mx-auto px-5">
          <SectionReveal>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Legal Info
            </span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
              Terms of <span className="text-primary italic">Service</span>
            </h1>
            <p className="text-gray-500 text-lg">Effective Date: April 2026</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">2. Provision of Services</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              Venus Civil Engineers is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Venus Civil Engineers provides may change from time to time without prior notice to you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">3. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              You expressly understand and agree that Venus Civil Engineers, its subsidiaries and affiliates, shall not be liable to you for any direct, indirect, incidental, special consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">4. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              If you have any questions or concerns regarding these Terms, please contact us at venus@civilengineers.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
