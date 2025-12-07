"use client";

import { Home, User, Briefcase, Code, FolderOpen, Award, GraduationCap, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "certifications", icon: Award, label: "Certifications" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navContent = (
    <div
      data-floating-nav
      className="hidden lg:block"
      style={{ 
        position: 'fixed',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 99999,
        pointerEvents: 'auto',
        visibility: 'visible',
        opacity: 1
      }}
    >
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <div className="flex flex-col gap-2 p-2 rounded-2xl bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative p-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className="w-5 h-5" />
                {isHovered && (
                  <div 
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm whitespace-nowrap pointer-events-none"
                    style={{ zIndex: 99999 }}
                  >
                    {item.label}
                  </div>
                )}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );

  if (!mounted) return null;

  return typeof window !== 'undefined' && document.body
    ? createPortal(navContent, document.body)
    : navContent;
}

