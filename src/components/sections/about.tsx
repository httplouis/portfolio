"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-2">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get to Know <GradientText>Me</GradientText>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 bg-[#1a1a1a] border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Summary</h3>
                </div>
                <p className="text-gray-200 leading-relaxed mb-4">{personalInfo.bio}</p>
                <p className="text-gray-300 leading-relaxed">
                  As an active member of various organizations, I've developed strong collaboration
                  and leadership skills.
                </p>
              </Card>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { number: "3+", label: "Years", color: "text-blue-400" },
                { number: "20+", label: "Projects", color: "text-blue-400" },
                { number: "13+", label: "Certificates", color: "text-blue-400" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description: "Writing maintainable and scalable code following best practices",
                bgClass: "bg-blue-500/20 group-hover:bg-blue-500/30",
                iconClass: "text-blue-400",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Always exploring new technologies and creative solutions",
                bgClass: "bg-blue-500/20 group-hover:bg-blue-500/30",
                iconClass: "text-blue-400",
              },
              {
                icon: Target,
                title: "Problem Solving",
                description: "Turning complex challenges into elegant solutions",
                bgClass: "bg-blue-500/20 group-hover:bg-blue-500/30",
                iconClass: "text-blue-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="p-6 bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${feature.bgClass} transition-all`}>
                      <feature.icon className={`w-6 h-6 ${feature.iconClass}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

