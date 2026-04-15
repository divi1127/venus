import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, ClipboardCheck, Ruler, TestTube, HardHat, FileText, Activity, Droplets, X, Briefcase, Building2, School, Hotel, Factory, Home as HomeIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionReveal from '../components/SectionReveal';

const Services = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('cat') || 'all';
  const [filter, setFilter] = useState(initialFilter);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setFilter(searchParams.get('cat') || 'all');
  }, [searchParams]);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'govt', name: 'Government Approvals' },
    { id: 'safety', name: 'Safety & Compliance' },
    { id: 'testing', name: 'Testing Services' }
  ];

  const services = [
    {
      id: 1,
      cat: 'govt',
      title: 'DTCP & LPA Approval',
      icon: <ShieldCheck size={32} />,
      shortDesc: 'Building and layout approvals from Directorate of Town and Country Planning.',
      fullDesc: 'We provide end-to-end assistance in obtaining DTCP and LPA approvals for residential layouts, commercial complexes, and industrial sites. Our process includes document verification, site inspection coordination, and liaison with government officials.',
      features: ['Document Preparation', 'Digital Submission', 'Regular Follow-ups', 'Liaison Support']
    },
    {
      id: 2,
      cat: 'govt',
      title: 'Pollution Board Approval',
      icon: <ClipboardCheck size={32} />,
      shortDesc: 'Consent to Establish (CTE) and Consent to Operate (CTO) from TNPCB.',
      fullDesc: 'Expert consultancy for obtaining environmental clearances and operation consents from the Tamil Nadu Pollution Control Board. We handle Green, Orange, and Red category industry compliance.',
      features: ['EIA Support', 'Water/Air Bio-testing', 'Project Reports', 'Online Filing']
    },
    {
      id: 3,
      cat: 'safety',
      title: 'Fire Safety License',
      icon: <HardHat size={32} />,
      shortDesc: 'Fire safety audit and NOC certification for all building types.',
      fullDesc: 'Comprehensive fire safety audits as per the National Building Code (NBC). We help you secure the Fire Safety License and Periodic Renewal NOCs.',
      features: ['Fire Safety Audit', 'Equipment Recommendation', 'NOC Acquisition', 'Staff Training']
    },
    {
      id: 4,
      cat: 'safety',
      title: 'Factory Act Stability',
      icon: <Ruler size={32} />,
      shortDesc: 'Structural stability certification by Competent Persons.',
      fullDesc: 'Mandatory structural stability testing and certification for factories under the Tamil Nadu Factory Rules. Conducted by authorized competent persons.',
      features: ['NDT Testing', 'Load Calculation', 'Stability Certificate Form-1A', 'Annual Inspections']
    },
    {
      id: 5,
      cat: 'testing',
      title: 'Machinery Testing',
      icon: <TestTube size={32} />,
      shortDesc: 'Safety certification for pressure vessels and lifting machinery.',
      fullDesc: 'Inspection and certification of industrial machinery, including pressure vessels, boilers, and lifting equipment as per statutory requirements.',
      features: ['Hydrostatic Testing', 'Thickness Gauging', 'Safety Valve Verification', 'Form-11 Certification']
    },
    {
      id: 6,
      cat: 'testing',
      title: 'Soil Testing',
      icon: <Droplets size={32} />,
      shortDesc: 'Geotechnical investigation for construction stability.',
      fullDesc: 'Professional soil investigation services including boreholes, SPT tests, and lab analysis to determine safe bearing capacity (SBC) for foundation design.',
      features: ['On-site Drilling', 'Lab Analysis', 'Geotech Reports', 'Foundation Design Data']
    }
  ];

  const developments = [
    { title: 'Mixed-Use Communities', icon: <Building2 className="text-primary" /> },
    { title: 'Single & Multi Family Residential', icon: <HomeIcon className="text-primary" /> },
    { title: 'Commercial Developments', icon: <Briefcase className="text-primary" /> },
    { title: 'Industrial Area Planning', icon: <Factory className="text-primary" /> },
    { title: 'Schools & Institutional', icon: <School className="text-primary" /> },
    { title: 'Hospitality & Hotels', icon: <Hotel className="text-primary" /> }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.cat === filter);

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden bg-gray-50 blueprint-bg">
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center space-y-6">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Catalog</span>
          <h1 className="text-5xl md:text-6xl font-bold font-poppins text-secondary">Expert Engineering <span className="text-primary italic underline decoration-primary/10">Services</span></h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto font-medium">Navigating state and central regulations with technical excellence for over four decades.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 md:mb-20 p-2 bg-gray-50/50 rounded-2xl md:rounded-3xl border border-gray-100 w-fit mx-auto max-w-full">
            {categories.map(cat => (
              <button 
                key={cat.id}
                className={`px-4 py-2 md:px-10 md:py-4 rounded-xl md:rounded-[1.2rem] font-bold transition-all duration-500 text-[10px] md:text-sm tracking-tight whitespace-nowrap ${filter === cat.id ? 'bg-primary text-white shadow-primary-glow scale-105' : 'bg-transparent text-gray-500 hover:text-primary hover:bg-white'}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white p-12 rounded-[2.5rem] shadow-soft cursor-pointer hover:border-primary border-2 border-transparent hover:shadow-strong transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="text-primary mb-10 bg-primary/5 w-24 h-24 flex items-center justify-center rounded-[2rem] group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">{service.shortDesc}</p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 w-full">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] group-hover:tracking-[0.5em] transition-all">Details & Features</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview Section */}
      <section className="py-32 bg-secondary text-white relative">
        <div className="absolute inset-0 blueprint-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Diverse Portfolio</span>
                <h2 className="text-5xl font-bold leading-tight">We Design for Every <span className="text-primary decoration-white/20 underline">Context</span></h2>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed font-medium text-center lg:text-left">
                Our expertise spans a diverse range of public and private engineering projects. From master-planned communities to intricate urban designs, 
                we bring technical excellence to every development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {developments.map(dev => (
                  <div key={dev.title} className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                      {dev.icon}
                    </div>
                    <span className="font-bold text-gray-200">{dev.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-[3rem] shadow-strong">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Consultancy" className="w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
               <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-lg font-bold italic">"Technical precision meets architectural vision in every project we touch."</p>
               </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 bg-secondary/60 backdrop-blur-xl z-[2000] flex items-center justify-center p-5 sm:p-10" onClick={() => setSelectedService(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-primary hover:rotate-90 transition-all duration-500 z-10 bg-white/50 p-2 rounded-full" onClick={() => setSelectedService(null)}>
                <X size={24} className="md:w-8 md:h-8" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">
                <div className="bg-gray-50 p-8 md:p-16 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="text-primary mb-6 md:mb-8 bg-white w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-[1.5rem] md:rounded-[2rem] shadow-md">{selectedService.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tighter leading-tight md:leading-none">{selectedService.title}</h2>
                  <div className="mt-6 md:mt-8 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">{selectedService.cat} Excellence</div>
                </div>
                
                <div className="p-8 md:p-16 space-y-8 md:space-y-12">
                  <div className="space-y-4 md:space-y-6">
                    <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Service Overview</h4>
                    <p className="text-gray-500 leading-relaxed md:leading-loose text-lg md:text-xl font-medium">{selectedService.fullDesc}</p>
                  </div>
                  
                  <div className="space-y-8">
                    <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Core Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selectedService.features.map(f => (
                        <li key={f} className="flex items-center gap-5 font-bold text-secondary text-lg group">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"><Activity size={18} /></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6">
                    <Link to="/contact">
                      <Button className="w-full h-16 rounded-2xl shadow-primary-glow font-bold text-lg" size="lg">Enquire for immediate assistance</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-24 bg-white border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-5 space-y-10">
          <SectionReveal>
            <h3 className="text-4xl font-bold text-secondary">Ready to start your next success story?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium pt-4">Join our league of successful industrial and commercial clients today.</p>
            <div className="pt-10 flex justify-center gap-6">
               <Link to="/contact">
                 <Button size="lg" className="h-16 px-12 rounded-2xl">Talk to an Expert</Button>
               </Link>
               <Link to="/contact">
                <Button variant="outline" size="lg" className="h-16 px-12 rounded-2xl border-2 font-bold">Get a Proposal</Button>
               </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
