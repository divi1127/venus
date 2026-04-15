import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, About, Services, Clients, Contact, Privacy, Terms } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } />
              <Route path="/about" element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              } />
              <Route path="/services" element={
                <PageWrapper>
                  <Services />
                </PageWrapper>
              } />
              <Route path="/clients" element={
                <PageWrapper>
                  <Clients />
                </PageWrapper>
              } />
              <Route path="/contact" element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } />
              <Route path="/privacy" element={
                <PageWrapper>
                  <Privacy />
                </PageWrapper>
              } />
              <Route path="/terms" element={
                <PageWrapper>
                  <Terms />
                </PageWrapper>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
