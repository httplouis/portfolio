"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Wrench, Globe } from "lucide-react";
import { skills } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { getSkillIcon } from "@/lib/skill-icons";

const categoryIcons = {
  frontend: Globe,
  backend: Code,
  mobile: Smartphone,
  tools: Wrench,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  frontend: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  backend: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  mobile: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  tools: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
};

export function Skills() {
  const categories = ["frontend", "backend", "mobile", "tools"] as const;

  const getSkillsByCategory = (category: typeof categories[number]) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
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
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Technical <GradientText>Skills</GradientText>
          </h2>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const categorySkills = getSkillsByCategory(category);
            const Icon = categoryIcons[category];
            const colors = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="p-6 bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-semibold capitalize text-white">{category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {categorySkills.slice(0, 4).map((skill, i) => {
                      const icon = getSkillIcon(skill.name);
                      return (
                        <div
                          key={i}
                          className={`px-3 py-2 rounded-lg ${colors.bg} flex items-center justify-center gap-2 text-sm hover:opacity-80 transition-all cursor-default ${colors.text}`}
                        >
                          {icon && <span className="flex-shrink-0">{icon}</span>}
                          <span className="text-center">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  {categorySkills.length > 4 && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                      +{categorySkills.length - 4} more
                    </p>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

