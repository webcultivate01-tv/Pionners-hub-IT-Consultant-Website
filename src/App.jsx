import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import WorkProcess from './pages/WorkProcess';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Loader from './components/Loader';

const App = () => {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Show loader for 2 seconds (you can adjust)
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />; // 👈 Show loader first
  // } 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work-process" element={<WorkProcess />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="pricing" element={<Pricing />} />
          {/* <Route path="team" element={<Team />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
