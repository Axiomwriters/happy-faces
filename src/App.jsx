import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from './layouts/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import Students from './pages/admin/Students';
import Courses from './pages/admin/Courses';
import Payments from './pages/admin/Payments';
import Settings from './pages/admin/Settings';
import Donate from './components/Donate';
import PartnershipForm from './components/PartnershipForm';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={
          <div className="font-sans antialiased text-gray-900 bg-gray-50">
            <Navbar />
            <Hero />
            <Impact />
            <About />
            <Projects />
            <CallToAction />
            <Contact />
            <Footer />
          </div>
        } />

        <Route path="/donate" element={<Donate />} />
        <Route path="/partner" element={<PartnershipForm />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
