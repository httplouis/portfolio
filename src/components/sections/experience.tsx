"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0a0a0a]">
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
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Work <GradientText>Experience</GradientText>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a] z-10" />

                <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 text-white">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-blue-400 mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-300">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                        {exp.endDate === "Present" ? "Present" : format(new Date(exp.endDate), "MMM yyyy")}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

