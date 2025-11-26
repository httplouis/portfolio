"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          <p className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-2">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic <GradientText>Background</GradientText>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="relative pl-24"
              >
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0a] z-10" />

                <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 text-white">{edu.degree}</h3>
                      <div className="text-blue-400 font-medium mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-gray-200 text-sm">{edu.description}</p>
                      )}
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

