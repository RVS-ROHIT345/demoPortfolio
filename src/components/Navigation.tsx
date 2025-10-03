import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      {/* Desktop and Tablet Navigation */}
      <div className="hidden md:block container mx-auto max-w-xl px-4 sm:px-6 flex justify-center">
        <div className={`transition-all duration-300 rounded-full px-6 py-1 ${
          isScrolled 
            ? 'bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 backdrop-blur-lg border border-primary/30 shadow-lg shadow-primary/20' 
            : 'bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 backdrop-blur-md border border-primary/20'
        }`}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
                <div className="w-full h-full bg-muted flex items-center justify-center text-sm sm:text-lg font-semibold">
                  JD
                </div>
              </div>
            </div>

            {/* Navigation Items - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Contact Button */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-foreground text-background hover:bg-foreground/90 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Width */}
      <div className="md:hidden w-full px-4">
        <div className={`transition-all duration-300 rounded-full px-6 py-1 w-full ${
          isScrolled 
            ? 'bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 backdrop-blur-lg border border-primary/30 shadow-lg shadow-primary/20' 
            : 'bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 backdrop-blur-md border border-primary/20'
        }`}>
          <div className="flex items-center justify-between">
            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
                <div className="w-full h-full bg-muted flex items-center justify-center text-sm font-semibold">
                  JD
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-gradient-to-b from-primary/20 via-accent/15 to-primary/20 backdrop-blur-lg border border-primary/30 rounded-2xl shadow-lg shadow-primary/20 py-4"
          >
            <div className="flex flex-col items-center space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full px-6 py-3 text-center text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="border-t border-border/20 my-2 w-full"></div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full px-6 py-3 text-center text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300 mx-4 rounded-full"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;