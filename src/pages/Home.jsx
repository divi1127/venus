import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ClipboardCheck, Ruler, TestTube, HardHat, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionReveal from '../components/SectionReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: 45, suffix: '+' },
    { label: 'Projects Completed', value: 1000, suffix: '+' },
    { label: 'Happy Clients', value: 100, suffix: '+' }
  ];

  const services = [
    { 
      title: 'DTCP & LPA Approval', 
      icon: <ShieldCheck size={40} />, 
      desc: 'Expert assistance in obtaining building and layout approvals from government bodies.' 
    },
    { 
      title: 'Pollution Board Approval', 
      icon: <ClipboardCheck size={40} />, 
      desc: 'Compliance and licenses from the TN Pollution Control Board for industrial units.' 
    },
    { 
      title: 'Fire Safety License', 
      icon: <HardHat size={40} />, 
      desc: 'Fire safety audits and NOC certification for commercial and industrial buildings.' 
    },
    { 
      title: 'Factory Act Stability', 
      icon: <Ruler size={40} />, 
      desc: 'Structural stability certification as per Factory Act requirements.' 
    },
    { 
      title: 'Machinery Testing', 
      icon: <TestTube size={40} />, 
      desc: 'Safety testing and certification for pressure vessels and industrial machinery.' 
    }
  ];

  const clients = [
    'Indian Oil', 'MRF Tyres', 'TVS Group', 'Fenner India', 'Murugappa Group', 'Sterlite', 'L&T', 'BHEL'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[700px] lg:h-[calc(100vh-80px)] flex items-center py-20 lg:py-0 overflow-hidden blueprint-bg">
        <div className="absolute inset-0 hero-overlay pointer-events-none opacity-40"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-secondary/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 w-full relative z-10 pt-10 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/10 text-primary px-4 md:px-5 py-2 rounded-full font-bold text-[10px] md:text-xs tracking-widest uppercase shadow-soft"
            >
              <CheckCircle2 size={16} className="hidden sm:block" /> 45+ Years of Technical Excellence
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-secondary leading-[1.1] md:leading-[1.1]">
              Engineering Excellence & <br />
              <span className="animate-gradient-text">Compliance</span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We navigate complex regulatory hurdles with technical precision. Specializing in DTCP, TNPCB, Fire Safety, and Structural Stability certification.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
              <Link to="/contact">
                <Button size="lg" className="px-10 h-16 rounded-2xl shadow-primary-glow font-bold text-lg">Get Consultation</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="px-10 h-16 rounded-2xl border-2 font-bold text-lg bg-white/50 backdrop-blur-sm">View Services</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none mt-10 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" alt="Engineering" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-strong flex items-center gap-4 border border-gray-100"
            >
               <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                 <ShieldCheck size={28} />
               </div>
               <div>
                 <p className="text-xs font-black text-gray-400 uppercase tracking-widest">ISO Certified</p>
                 <p className="font-bold text-secondary text-sm">Quality Guaranteed</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <SectionReveal className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`space-y-4 p-8 rounded-3xl transition-colors duration-300 border border-black/5 hover:border-primary/20 hover:bg-white`}>
                <h3 className="text-6xl font-black text-secondary flex justify-center md:justify-start items-baseline">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="font-bold text-gray-400 uppercase tracking-[0.2em] text-xs text-center md:text-left">{stat.label}</p>
                <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50/50 blueprint-bg-fine">
        <div className="max-w-7xl mx-auto px-5">
          <SectionReveal className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Expertise Areas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Engineering Focus</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">We provide comprehensive consultancy and engineering services tailored to meet complex regulatory requirements.</p>
          </SectionReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, index) => (
              <SectionReveal 
                key={service.title}
                delay={index * 0.1}
                className="group relative h-full"
              >
                <div className="p-8 md:p-12 bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-soft border border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-primary-glow flex flex-col h-full bg-gradient-to-br from-white to-gray-50/50">
                  <div className="text-primary mb-6 md:mb-8 bg-primary/5 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-secondary leading-tight">{service.title}</h3>
                  <p className="text-gray-500 mb-6 md:mb-8 text-sm leading-relaxed flex-grow">{service.desc}</p>
                  <Link to="/services" className="flex items-center gap-2 md:gap-3 text-primary font-black text-[10px] md:text-xs uppercase tracking-widest group-hover:gap-4 md:group-hover:gap-5 transition-all w-fit">
                    Full Details <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Slider */}
      <section className="py-16 md:py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 blueprint-bg pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4">The Trust Matrix</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Industry Leaders Who Rely on Us</h2>
          </div>
          <div className="relative flex overflow-hidden py-6 md:py-10">
            <div className="flex gap-6 md:gap-20 animate-[scroll_40s_linear_infinite] whitespace-nowrap items-center grayscale hover:grayscale-0 transition-all duration-300">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4 px-6 py-4 md:px-10 md:py-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center font-black text-primary text-sm md:text-base group-hover:bg-primary group-hover:text-white transition-all duration-300">V</div>
                  <span className="text-lg md:text-2xl font-black tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-fixed bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10 space-y-10">
          <SectionReveal>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to streamline your <br /> next project?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">Get a free consultation from our expert team of engineers today.</p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-16 rounded-2xl shadow-2xl font-black uppercase tracking-widest text-sm">Contact Us Now</Button>
               </Link>
               <Link to="/clients">
                 <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-12 h-16 rounded-2xl font-bold backdrop-blur-sm">View Success Stories</Button>
               </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
