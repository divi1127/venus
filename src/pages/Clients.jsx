import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/ui/Button';

const Clients = () => {
  const majorClients = [
    { name: 'Indian Oil Corporation', desc: 'Petrochemical Industry', logo: 'IOC' },
    { name: 'MRF Tyres', desc: 'Automotive Sector', logo: 'MRF' },
    { name: 'TVS Group', desc: 'Automotive Manufacturing', logo: 'TVS' },
    { name: 'Fenner India', desc: 'Industrial Engineering', logo: 'Fen' },
    { name: 'Murugappa Group', desc: 'Industrial Conglomerate', logo: 'Mur' },
    { name: 'Sterlite', desc: 'Mining & Metals', logo: 'Str' },
    { name: 'JK Tyres', desc: 'Rubber Industry', logo: 'JKT' },
    { name: 'Apollo Tyres', desc: 'Automotive Industry', logo: 'Apo' },
    { name: 'Ashok Leyland', desc: 'Heavy Vehicles', logo: 'ASH' },
    { name: 'Titan Industries', desc: 'Precision Engineering', logo: 'Ttn' },
    { name: 'Britannia', desc: 'F&B Industrial Units', logo: 'Btn' },
    { name: 'Saint-Gobain', desc: 'Glass Manufacturing', logo: 'SGb' }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="relative py-32 bg-gray-50 blueprint-bg-fine overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/[0.02] -skew-x-12 translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center space-y-8">
          <SectionReveal className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full font-black text-[10px] tracking-[0.3em] uppercase">
              The Trust Network
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold text-secondary tracking-tighter">
              Trusted by <span className="text-primary italic">Global Brands</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed pt-2">
              For over four decades, we've provided mission-critical compliance and engineering solutions to industry leaders.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {majorClients.map((client, index) => (
              <SectionReveal
                key={client.name}
                delay={index * 0.05}
                className="group relative h-full"
              >
                <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-soft text-center border border-black/5 hover:border-primary/20 hover:shadow-strong transition-all duration-500 flex flex-col h-full bg-gradient-to-br from-white to-gray-50/30">
                  <div className="relative mb-6 md:mb-8 h-20 md:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-20"></div>
                    <div className="text-4xl md:text-5xl font-black text-secondary/10 group-hover:text-primary transition-all duration-500 relative z-10 tracking-tighter">
                      {client.logo}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-auto">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{client.name}</h3>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{client.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mx-0.5 animate-pulse"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mx-0.5"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mx-0.5"></div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <SectionReveal className="text-center mb-20 space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">National Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold">Industrial Impact Nationwide</h2>
          </SectionReveal>
          
          <div className="relative flex overflow-hidden py-10 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex gap-24 animate-[scroll_50s_linear_infinite] whitespace-nowrap items-center">
              {[...majorClients, ...majorClients, ...majorClients].map((client, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                   <span className="text-3xl font-black tracking-tight text-white/80">{client.name}</span>
                   <div className="h-0.5 w-12 bg-primary/40 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <SectionReveal>
            <div className="bg-white p-10 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[4rem] shadow-strong border border-black/5 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
               
               <div className="relative z-10 space-y-8 md:space-y-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary tracking-tighter">Scale Your Engineering <br className="hidden sm:block" /> Goals with <span className="text-primary">Venus</span></h2>
                  <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">Join hundreds of industrial leaders who trust us for their complex compliance and technical architectural needs.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6">
                    <Link to="/contact">
                      <Button size="lg" className="w-full sm:w-auto h-16 px-8 md:px-12 rounded-2xl shadow-primary-glow font-black uppercase tracking-widest text-sm">Partner With Us</Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-8 md:px-12 rounded-2xl border-2 font-bold">Download Credentials</Button>
                    </Link>
                  </div>
               </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Clients;
