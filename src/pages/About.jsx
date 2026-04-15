import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, MapPin, Award, Users, History, CheckCircle2 } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/ui/Button';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const team = [
    {
      name: 'Er. Hajee S. Shajahan',
      role: 'Founder & Principal Engineer',
      exp: '45+ Years Experience',
      bio: 'A visionary leader with over four decades of expertise in civil engineering and government liaison. His dedication to technical excellence has built the foundation of Venus Civil Engineers.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'S. Mohamed Afrose',
      role: 'Director',
      exp: '15+ Years Experience',
      bio: 'Leading the modern era of Venus Civil Engineers with a focus on digital compliance, industrial expansion, and client satisfaction nationwide.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const locations = [
    'Madurai (Head Office)', 'Chennai', 'Coimbatore', 'Tiruppur', 'Trichy'
  ];

  const timeline = [
    { year: '1979', title: 'The Foundation', event: 'Founded by Er. Hajee S. Shajahan with a vision to transform Madurai\'s industrial landscape.' },
    { year: '1995', title: 'Industrial Shift', event: 'Pivot towards major industrial consultancy and complex government compliance services.' },
    { year: '2010', title: 'Golden Era', event: 'Achieved 500+ successful government approvals for large-scale industrial projects.' },
    { year: '2023', title: 'Global Standards', event: 'Expanding statewide with 5+ branches and a team of 50+ specialized engineers.' }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Overview Header */}
      <section className="relative py-32 bg-gray-50 blueprint-bg-fine overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <SectionReveal className="space-y-6 md:space-y-8">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 md:px-5 py-2 rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase">
              <History size={16} /> Heritage & Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-secondary max-w-4xl mx-auto leading-tight">
              Pioneering Engineering & <span className="text-primary italic">Compliance</span> Since 1979
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
              Venus Civil Engineers is a premier consulting firm dedicated to providing seamless 
              government approvals and technical advisory for industrial and commercial sectors.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Profiles */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-5">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Leadership</span>
                <h2 className="text-4xl font-bold">The Visionaries</h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm font-medium">Guided by decades of experience and a passion for structural integrity and compliance.</p>
           </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {team.map((member, index) => (
              <SectionReveal 
                key={member.name}
                delay={index * 0.2}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row gap-10 bg-white p-10 rounded-[2.5rem] shadow-soft hover:shadow-strong transition-all duration-500 border border-black/5 hover:border-primary/20 items-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-12 -translate-y-12"></div>
                  
                  <div className="w-48 h-64 shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 space-y-5 text-center md:text-left relative z-10">
                    <span className="inline-block bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">{member.exp}</span>
                    <h3 className="text-3xl font-bold text-secondary">{member.name}</h3>
                    <p className="text-primary font-black text-xs uppercase tracking-widest">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-4">{member.bio}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="absolute inset-0 blueprint-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <SectionReveal className="bg-white/5 p-16 rounded-[3rem] text-center border border-white/10 hover:bg-white/10 transition-all duration-500 group">
            <div className="text-primary mb-8 flex justify-center group-hover:scale-110 transition-transform"><Eye size={64} /></div>
            <h3 className="text-4xl font-bold mb-8 italic">Our Vision</h3>
            <p className="text-gray-400 leading-[2] text-lg font-medium">To be the most trusted name in engineering compliance, fostering industrial growth through technical excellence and ethical consultancy across the nation.</p>
          </SectionReveal>
          <SectionReveal delay={0.2} className="bg-white/5 p-16 rounded-[3rem] text-center border border-white/10 hover:bg-white/10 transition-all duration-500 group">
            <div className="text-primary mb-8 flex justify-center group-hover:scale-110 transition-transform"><Target size={64} /></div>
            <h3 className="text-4xl font-bold mb-8 italic">Our Mission</h3>
            <p className="text-gray-400 leading-[2] text-lg font-medium">To simplify complex regulatory hurdles for our clients by providing accurate, timely, and professional certification and approval services at every step.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5">
           <div className="text-center mb-24 space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">The Journey</span>
              <h2 className="text-5xl font-bold">Decades of Trust</h2>
           </div>
           
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[50%] top-0 h-full w-1 bg-gradient-to-b from-transparent via-gray-100 to-transparent hidden md:block" />
            
            <div className="space-y-20">
              {timeline.map((item, idx) => (
                <SectionReveal 
                  key={item.year} 
                  direction={idx % 2 === 0 ? 'left' : 'right'}
                  className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
                >
                  <div className="w-full md:w-[45%] bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-black/5 shadow-soft hover:shadow-strong transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-3xl md:text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{item.year}</span>
                       <h4 className="text-lg md:text-xl font-bold text-secondary uppercase tracking-tighter">{item.title}</h4>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.event}</p>
                  </div>
                  
                  <div className="absolute left-[50%] translate-x-[-50%] w-12 h-12 bg-white border-8 border-primary rounded-full hidden md:flex items-center justify-center z-10 shadow-lg">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                  
                  <div className="hidden md:block w-[45%]" />
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 bg-gray-50 blueprint-bg-fine">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Presence</span>
              <h2 className="text-4xl md:text-5xl font-bold">Regional Network</h2>
            </div>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">With strategic nodes across Tamil Nadu, we bridge the gap between technical standards and local industrial needs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {locations.map((loc) => (
                <motion.div 
                  key={loc} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-soft hover:shadow-md border border-black/5 hover:border-primary transition-all group cursor-default"
                >
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <span className="font-bold text-secondary text-lg tracking-tight">{loc}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-strong border-8 border-white bg-white flex justify-center items-center group">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-75 animate-pulse"></div>
            <div className="relative z-10 text-center space-y-6">
              <div className="relative">
                <MapPin size={100} className="text-primary mx-auto animate-bounce duration-[2000ms]" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/10 rounded-full blur-md" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-secondary tracking-tighter">TAMIL NADU NETWORK</h4>
                <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">Excellence Delivered Everywhere</p>
              </div>
              <div className="pt-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-primary/20 hover:border-primary">View Map Details</Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 blueprint-bg opacity-5 group-hover:opacity-10 transition-opacity"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
