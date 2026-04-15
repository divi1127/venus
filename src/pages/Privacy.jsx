import React from 'react';
import SectionReveal from '../components/SectionReveal';

const Privacy = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50 blueprint-bg-fine text-center">
        <div className="max-w-4xl mx-auto px-5">
          <SectionReveal>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Legal Info
            </span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
              Privacy <span className="text-primary italic">Policy</span>
            </h1>
            <p className="text-gray-500 text-lg">Last updated: April 2026</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 font-medium">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary">3. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed font-medium">
              If you have questions or comments about this notice, you may email us at venus@civilengineers.com or by post to our Head Office in Madurai, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
