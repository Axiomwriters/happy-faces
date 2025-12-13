import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }, // Assuming we might add routes later, for now anchors or just placeholders
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-300 ${scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img src="/favicon.png" alt="Happy Faces Logo" className="h-10 w-10 object-contain" />
            <span className={`text-3xl ${scrolled ? 'text-green-600' : 'text-white'}`}>
              Happy<span className={scrolled ? 'text-gray-800' : 'text-green-300'}>Faces</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-green-400 ${scrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => navigate('/donate')}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${scrolled
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-white text-green-600 hover:bg-gray-100'
                }`}
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden text-3xl ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[100] md:hidden backdrop-blur-sm"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-4 right-0 bottom-4 w-[280px] bg-white shadow-2xl z-[101] md:hidden flex flex-col py-6 px-6 rounded-tl-3xl rounded-bl-3xl border-l border-t border-b border-gray-100"
            >
              <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                <span className="text-xl font-bold text-gray-800">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 text-xl font-medium hover:text-green-600 hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/donate');
                }}
                className="mt-auto w-full py-3.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Donate Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
