import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Blog, Cases, HomePage, Pricing, Request, Services, Navbar, Footer  } from './sections/index.js';

const App = () => {
  return (
    <Router>
    <div className='overflow-x-hidden'>
      {/* Navbar - Will appear on every page */}
      <Navbar />

      {/* Defining Routes */}
      <div> {/* Adjust this value if needed */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/request" element={<Request />} />
          </Routes>
        </div>


      {/* Footer - Will appear on every page */}
      <Footer />
    </div>
  </Router>
);
}

export default App;
