import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaCreditCard,
  FaCog,
  FaTimes,
  FaChartPie,
  FaHandHoldingHeart,
  FaHandshake
} from 'react-icons/fa';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuSections = [
    {
      header: 'Overview',
      items: [
        { title: 'Dashboard', path: '/admin', icon: <FaHome /> },
      ]
    },
    {
      header: 'Management',
      items: [
        { title: 'Students', path: '/admin/students', icon: <FaUserGraduate /> },
        { title: 'Courses', path: '/admin/courses', icon: <FaBook /> },
        { title: 'Partners', path: '/admin/partners', icon: <FaHandshake /> },
      ]
    },
    {
      header: 'Impact & Finance',
      items: [
        { title: 'Impact Reports', path: '/admin/impact', icon: <FaChartPie />, badge: 'New' },
        { title: 'Payments', path: '/admin/payments', icon: <FaCreditCard /> },
        { title: 'Donations', path: '/admin/donations', icon: <FaHandHoldingHeart /> },
      ]
    },
    {
      header: 'System',
      items: [
        { title: 'Settings', path: '/admin/settings', icon: <FaCog /> },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity bg-black opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto scrollbar-hide transition duration-300 transform bg-white border-r border-gray-200 text-gray-600 lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link to="/admin" className="text-2xl font-bold tracking-tight flex items-center gap-1">
            <span className="text-green-600">Happy</span><span className="text-gray-800">Faces</span>
          </Link>
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-8">
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{section.header}</h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive
                          ? 'bg-green-50 text-green-700 shadow-sm'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                      >
                        <div className="flex items-center">
                          <span className={`text-lg transition-colors ${isActive ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600'} mr-3`}>{item.icon}</span>
                          <span className="font-medium text-sm">{item.title}</span>
                        </div>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700">{item.badge}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          {/* Profile Card with Green Gradient */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg shadow-green-500/20 text-white transform transition-transform hover:scale-105 cursor-pointer">
            <div className="min-w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-green-700 border border-green-600">HF</div>
            <div className="overflow-hidden">
              <p className="text-white text-sm font-bold truncate">Happy Faces</p>
              <p className="text-xs text-green-100 truncate opacity-90">Admin Console</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
