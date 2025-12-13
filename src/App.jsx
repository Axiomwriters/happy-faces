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
import ProtectedRoute from './components/ProtectedRoute';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import StudentLayout from './layouts/StudentLayout';

// Admin Pages
import DashboardHome from './pages/admin/DashboardHome';
import AdminLogin from './pages/admin/Login';
import AdminStudents from './pages/admin/Students';
import AdminCourses from './pages/admin/Courses';
import AdminPayments from './pages/admin/Payments';
import AdminSettings from './pages/admin/Settings';
import AdminDonations from './pages/admin/Donations';
import AdminPartners from './pages/admin/Partners';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import StudentCourses from './pages/student/Courses';
import Performance from './pages/student/Performance';
import Calendar from './pages/student/Calendar';
import ResourceLibrary from './pages/student/ResourceLibrary';
import Messaging from './pages/student/Messaging';
import DiscussionForum from './pages/student/DiscussionForum';

// Public Pages
import Login from './pages/Login';
import Register from './pages/Register';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
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

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/partner" element={<PartnershipForm />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="donations" element={<AdminDonations />} />
          <Route path="partners" element={<AdminPartners />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Protected Student Dashboard */}
        <Route
          path="/student"
          element={
            <ProtectedRoute requiredRole="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="performance" element={<Performance />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="resources" element={<ResourceLibrary />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="forum" element={<DiscussionForum />} />
          <Route path="certificates" element={<div className="text-center p-8 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold">Certificates - Coming Soon</h2></div>} />
          <Route path="payments" element={<div className="text-center p-8 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold">Payments - Coming Soon</h2></div>} />
          <Route path="profile" element={<div className="text-center p-8 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold">Profile - Coming Soon</h2></div>} />
          <Route path="profile/edit" element={<div className="text-center p-8 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold">Edit Profile - Coming Soon</h2></div>} />
          <Route path="settings" element={<div className="text-center p-8 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold">Settings - Coming Soon</h2></div>} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
