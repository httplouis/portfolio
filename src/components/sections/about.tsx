"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Sparkles, Zap, Rocket } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-20 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #1a1a1a 100%)",
      }}
    >
      {/* Diagonal Background Split */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-blue-500/10"
          style={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
            transform: "skewY(-2deg)",
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative"
        >
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <p className="text-blue-400 uppercase text-sm font-semibold tracking-wider">
              ABOUT ME
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get to Know <GradientText>Me</GradientText>
          </h2>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Summary Card with Tilt */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden group"
              >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Summary</h3>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4 text-lg">{personalInfo.bio}</p>
                <p className="text-gray-300 leading-relaxed">
                  As an active member of various organizations, I've developed strong collaboration
                  and leadership skills.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats with Hexagonal Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            {[
              { number: "3+", label: "Years", gradient: "from-blue-500/20 to-blue-600/10", textColor: "text-blue-400" },
              { number: "13+", label: "Certificates", gradient: "from-pink-500/20 to-pink-600/10", textColor: "text-pink-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="relative p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative text-center">
                  <div className={`text-4xl font-bold ${stat.textColor} mb-2`}>{stat.number}</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Cards with Unusual Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Code,
              title: "Clean Code",
              description: "Writing maintainable and scalable code following best practices",
              gradient: "from-blue-500/20 to-blue-600/10",
              iconGradient: "from-blue-400 to-blue-600",
              delay: 0,
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Always exploring new technologies and creative solutions",
              gradient: "from-purple-500/20 to-purple-600/10",
              iconGradient: "from-purple-400 to-purple-600",
              delay: 0.1,
            },
            {
              icon: Target,
              title: "Problem Solving",
              description: "Turning complex challenges into elegant solutions",
              gradient: "from-pink-500/20 to-pink-600/10",
              iconGradient: "from-pink-400 to-pink-600",
              delay: 0.2,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: feature.delay, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              className="relative p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden group"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} border border-white/20 mb-4`}>
                  {index === 0 && <Code className="w-6 h-6 text-blue-400" />}
                  {index === 1 && <Lightbulb className="w-6 h-6 text-purple-400" />}
                  {index === 2 && <Target className="w-6 h-6 text-pink-400" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
