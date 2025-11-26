"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/card-3d";

export function Hero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Hi, I'm <br />
              <GradientText className="text-6xl md:text-7xl lg:text-8xl">
                {personalInfo.name}
              </GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-3 text-xl md:text-2xl text-white"
            >
              <Rocket className="w-6 h-6 text-blue-400" />
              <span>{personalInfo.role}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-400">13+</div>
                <div className="text-sm text-gray-300">Certificates</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-4 pt-4"
            >
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              )}
              {personalInfo.resume && (
                <a
                  href={personalInfo.resume}
                  download
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all"
                  aria-label="Download Resume"
                >
                  <Download className="w-5 h-5 text-white" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <Card3D className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
              </div>
            </Card3D>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

