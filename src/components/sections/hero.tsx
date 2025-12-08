"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail, Rocket, Sparkles, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/ui/gradient-mesh";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

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
        style={{ y }}
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
              transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Hi, I'm
              </span>
              <br />
              <GradientText className="text-6xl md:text-7xl lg:text-8xl block mt-2">
                {personalInfo.name}
              </GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-3 text-xl md:text-2xl text-white relative"
            >
              <Rocket className="w-6 h-6 text-blue-400" />
              <span className="relative">
                {personalInfo.role}
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white backdrop-blur-sm bg-white/5"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  </motion.a>
                )
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full scale-150 opacity-30 -z-20" />
              
              {/* Image Container */}
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl z-10"
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-3xl"
                  priority
                  unoptimized
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent rounded-3xl" />
                
                {/* Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-30 -z-10" />
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            className="relative p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm group"
          >
            <ArrowDown className="w-6 h-6 text-white" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
