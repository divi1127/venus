import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock, Map as MapIcon, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHoveringMap, setIsHoveringMap] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      title: 'Direct Line',
      icon: <Phone size={24} />,
      details: ['+91 95006 10109', '0452-2530669'],
      sub: 'Mon - Sat, 9:00 AM - 7:00 PM',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Email Support',
      icon: <Mail size={24} />,
      details: ['venus@civilengineers.com', 'info@venuscivil.in'],
      sub: 'Average response: 4 hours',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Head Office',
      icon: <MapPin size={24} />,
      details: ['123, Engineering Street,', 'Madurai, TN - 625001'],
      sub: 'Main Branch Location',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="py-24 relative overflow-hidden bg-gray-50 blueprint-bg">
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center space-y-8">
           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full font-black text-xs tracking-widest uppercase">
              <Clock size={16} /> Fast Response Guaranteed
           </div>
           <h1 className="text-5xl md:text-7xl font-bold font-poppins text-secondary leading-tight">Expert Advice Is Just a <br /><span className="text-primary italic underline decoration-primary/10">Message Away</span></h1>
           <p className="text-gray-500 text-xl max-w-3xl mx-auto font-medium">Whether it's a routine compliance check or a complex government approval, we're here to help.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="p-8 md:p-10 bg-secondary text-white rounded-[2rem] md:rounded-[2.5rem] shadow-strong space-y-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full translate-x-12 -translate-y-12"></div>
                 <h3 className="text-xl md:text-2xl font-bold relative z-10">Why Consult Us?</h3>
                 <ul className="space-y-4 relative z-10">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-300"><ShieldCheck size={18} className="text-primary" /> 45+ Years of Trust</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-300"><ShieldCheck size={18} className="text-primary" /> ISO Certifed Process</li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-300"><ShieldCheck size={18} className="text-primary" /> Expert Government Liaison</li>
                 </ul>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 bg-white p-8 rounded-3xl shadow-soft border border-black/5 hover:border-primary/20 transition-all duration-500 hover:translate-x-2 group cursor-default"
                  >
                    <div className={`w-14 h-14 ${info.color} flex items-center justify-center rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">{info.title}</h3>
                      {info.details.map(d => <p key={d} className="font-bold text-secondary text-lg tracking-tight">{d}</p>)}
                      <p className="text-xs text-secondary/40 font-bold">{info.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-6 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-strong border border-black/5 relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-8 md:mb-12 space-y-4 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary">Start a Conversation</h3>
                <p className="text-gray-400 font-medium">Fill out the form below and an engineer will reach out to you within 24 hours.</p>
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 text-primary rounded-[2rem] shadow-primary-glow animate-bounce">
                      <CheckCircle size={48} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-3xl font-black text-secondary uppercase tracking-tighter">Mission Accepted!</h4>
                       <p className="text-gray-500 font-medium text-lg">We've received your request. Stand by for technical contact.</p>
                    </div>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">Send another message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 md:col-span-1">
                      <label className="text-xs font-black text-secondary/60 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex: Er. Rajesh Kumar"
                        className="w-full p-6 h-16 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-semibold shadow-sm"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-3 md:col-span-1">
                      <label className="text-xs font-black text-secondary/60 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 00000 00000"
                        className="w-full p-6 h-16 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-semibold shadow-sm"
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3 md:col-span-2">
                      <label className="text-xs font-black text-secondary/60 uppercase tracking-widest ml-1">Service Category</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full p-6 h-16 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-semibold shadow-sm appearance-none cursor-pointer"
                          value={formState.service}
                          onChange={e => setFormState({...formState, service: e.target.value})}
                        >
                          <option value="">Select an engineering service</option>
                          <option value="govt">Government Approvals (DTCP/LPA)</option>
                          <option value="pollution">Pollution Board Compliance</option>
                          <option value="fire">Fire Safety NOC</option>
                          <option value="stability">Structural Stability Certificate</option>
                          <option value="testing">Machinery & Vessel Testing</option>
                          <option value="design">Architectural & Urban Design</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <MapIcon size={20} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-xs font-black text-secondary/60 uppercase tracking-widest ml-1">Project Brief</label>
                      <textarea 
                        rows="4" 
                        required 
                        placeholder="Tell us about your project requirements or specific compliance needs..."
                        className="w-full p-6 bg-white border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-semibold shadow-sm resize-none"
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2 pt-4">
                      <Button type="submit" size="lg" className="w-full h-16 rounded-2xl shadow-primary-glow font-black uppercase tracking-[0.2em] text-sm">
                        Launch Inquiry <Send size={18} className="ml-3" />
                      </Button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-[5%] pb-32">
        <div 
          className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-strong border-8 border-white group"
          onMouseEnter={() => setIsHoveringMap(true)}
          onMouseLeave={() => setIsHoveringMap(false)}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.63914856!2d78.077227!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58242173a4b%3A0x85a9bc9a956f505!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712574000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            className={`transition-all duration-700 ${isHoveringMap ? 'grayscale-0' : 'grayscale'}`}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute top-10 left-10 z-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-strong border border-white/50 hidden md:block max-w-sm">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl font-black">V</div>
               <h4 className="font-bold text-xl text-secondary">Headquarters</h4>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed mb-4 text-sm">Strategically located in Madurai to serve clients across Tamil Nadu with local precision.</p>
            <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest">
               <MapIcon size={16} /> Open in Google Maps
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919500610109" 
        className="fixed bottom-10 right-10 bg-[#25d366] text-white px-8 py-5 rounded-3xl flex items-center gap-4 shadow-[0_20px_50px_rgba(37,211,102,0.4)] font-black z-[1000] hover:scale-105 hover:-translate-y-2 transition-all duration-500 group uppercase tracking-widest text-xs"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div className="relative">
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25d366] animate-pulse" />
        </div>
        <span>Consult Now</span>
      </a>
    </div>
  );
};

export default Contact;
