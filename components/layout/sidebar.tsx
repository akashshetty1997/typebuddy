"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem, Logo } from "@/types";
import { SmoothButton } from "@/components/ui/smooth-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IconWrapper } from "@/components/ui/icon-wrapper";

interface SidebarProps {
  logo: Logo;
  navigation: NavigationItem[];
}

export const Sidebar = ({ logo, navigation }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const handleNavClick = async (href: string) => {
    const sectionId = href.replace("#", "");
    setIsNavigating(true);
    setIsOpen(false);
    
    // Create overlay for smooth transition
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${document.documentElement.classList.contains('dark') ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    // Fade in overlay
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
    
    // Wait for fade, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveSection(sectionId);
      }
      
      // Fade out overlay
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(overlay);
          setIsNavigating(false);
        }, 300);
      }, 100);
    }, 300);
  };

  return (
    <>
      {/* Navigation Loading Indicator */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] h-1"
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-background border-r border-border z-40",
          "flex-col px-6 py-8"
        )}
      >
        {/* Logo */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold">{logo.text}</h1>
          </div>
          <p className="text-sm text-muted-foreground">{logo.tagline}</p>
        </motion.div>

        {/* Theme Toggle */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ThemeToggle className="w-full justify-start" showText={true} />
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                    "hover:bg-secondary",
                    activeSection === item.id && "bg-secondary font-medium"
                  )}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background animation on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconWrapper 
                      icon={item.icon} 
                      size={20} 
                      className={cn(
                        "text-muted-foreground relative z-10",
                        activeSection === item.id && "text-primary"
                      )}
                    />
                  </motion.div>
                  <span className="flex-1 text-left relative z-10">{item.label}</span>
                  <ChevronRight 
                    className={cn(
                      "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200 relative z-10",
                      "group-hover:opacity-100 group-hover:translate-x-0",
                      activeSection === item.id && "opacity-100 translate-x-0"
                    )}
                  />
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <motion.div 
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <SmoothButton 
              href="https://chromewebstore.google.com/detail/typebuddy/mkiefkcpamkfebmojokkmiahllpihfkl?hl=en-US" 
              external
              className="w-full shadow-lg hover:shadow-xl"
            >
              Install Extension
            </SmoothButton>
          </motion.div>
        </motion.div>
      </motion.aside>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b",
          scrolled && "shadow-md"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">
                T
              </span>
            </div>
            <h1 className="text-xl font-bold">{logo.text}</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle showText={false} />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Mobile Menu */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-72 bg-background z-50 shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">
                        T
                      </span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold">{logo.text}</h1>
                      <p className="text-xs text-muted-foreground">
                        {logo.tagline}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Theme Toggle in Mobile */}
                <div className="mb-6">
                  <ThemeToggle
                    className="w-full justify-start"
                    showText={true}
                  />
                </div>

                <nav>
                  <ul className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.li 
                        key={item.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.button
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                            "hover:bg-secondary",
                            activeSection === item.id && "bg-secondary font-medium"
                          )}
                          whileTap={{ scale: 0.98 }}
                        >
                          <IconWrapper 
                            icon={item.icon} 
                            size={20} 
                            className={cn(
                              "text-muted-foreground",
                              activeSection === item.id && "text-primary"
                            )}
                          />
                          <span className="flex-1 text-left">{item.label}</span>
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <SmoothButton 
                      href="https://chromewebstore.google.com/detail/typebuddy/mkiefkcpamkfebmojokkmiahllpihfkl?hl=en-US" 
                      external
                      className="w-full shadow-lg hover:shadow-xl"
                    >
                      Install Extension
                    </SmoothButton>
                  </motion.div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
