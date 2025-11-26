"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail, Rocket, Sparkles, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { FloatingOrb } from "@/components/ui/floating-orb";
import { GradientMesh } from "@/components/ui/gradient-mesh";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <GradientMesh />
      
      {/* Floating Orbs */}
      <FloatingOrb delay={0} size={200} color="blue" initialX={10} initialY={20} />
      <FloatingOrb delay={2} size={250} color="purple" initialX={80} initialY={60} />
      <FloatingOrb delay={4} size={180} color="pink" initialX={50} initialY={80} />

      {/* Diagonal Background Split */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" 
          style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)" }} 
        />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/5 via-transparent to-pink-500/5" 
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }} 
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content with Diagonal Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8 relative"
            style={{ transform: "perspective(1000px) rotateY(-2deg)" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto]"
              >
                Hi, I'm
              </motion.span>
              <br />
              <GradientText className="text-6xl md:text-7xl lg:text-8xl block mt-2">
                {personalInfo.name}
              </GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-3 text-xl md:text-2xl text-white relative"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="w-6 h-6 text-blue-400" />
              </motion.div>
              <span className="relative">
                {personalInfo.role}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Stats with Hexagonal Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { value: "3+", label: "Years", colorClass: "from-blue-500/20 to-blue-600/10", textClass: "text-blue-400" },
                { value: "20+", label: "Projects", colorClass: "from-purple-500/20 to-purple-600/10", textClass: "text-purple-400" },
                { value: "13+", label: "Certificates", colorClass: "from-pink-500/20 to-pink-600/10", textClass: "text-pink-400" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.colorClass} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative text-center">
                    <div className={`text-3xl font-bold ${stat.textClass}`}>{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/50"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links with Circular Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-4 pt-4"
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                { icon: Download, href: personalInfo.resume, label: "Resume", download: true },
              ].map((social, i) => (
                social.href && (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.download ? undefined : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    download={social.download}
                    className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all group"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    data-cursor-hover
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl"
                      initial={false}
                    />
                  </motion.a>
                )
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-3xl rounded-full scale-150 opacity-50" />
              
              {/* Image Container */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30" />
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover mix-blend-overlay"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 via-transparent to-transparent" />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-4 rounded-3xl"
                  style={{
                    borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1",
                  }}
                  animate={{
                    borderImageSlice: [1, 1, 1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20"
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20"
                animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Unusual Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            className="relative p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm group"
            data-cursor-hover
          >
            <ArrowDown className="w-6 h-6 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
