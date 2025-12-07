"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Wrench, Globe, Zap } from "lucide-react";
import { skills } from "@/lib/data";
import { GradientText } from "@/components/ui/gradient-text";
import { getSkillIcon } from "@/lib/skill-icons";
import { useRef } from "react";

const categoryIcons = {
  frontend: Globe,
  backend: Code,
  mobile: Smartphone,
  tools: Wrench,
};

const categoryGradients: Record<string, { from: string; to: string; icon: string }> = {
  frontend: {
    from: "from-blue-500/30",
    to: "to-cyan-500/20",
    icon: "text-blue-400",
  },
  backend: {
    from: "from-purple-500/30",
    to: "to-pink-500/20",
    icon: "text-purple-400",
  },
  mobile: {
    from: "from-pink-500/30",
    to: "to-rose-500/20",
    icon: "text-pink-400",
  },
  tools: {
    from: "from-cyan-500/30",
    to: "to-blue-500/20",
    icon: "text-cyan-400",
  },
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const categories = ["frontend", "backend", "mobile", "tools"] as const;

  const getSkillsByCategory = (category: typeof categories[number]) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      className="relative py-20 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 50%, #1a1a1a 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Diagonal Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 relative"
        >
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <p className="text-blue-400 uppercase text-sm font-semibold tracking-wider">
              SKILLS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Technical <GradientText>Skills</GradientText>
          </h2>
        </motion.div>

        {/* Unorthodox Grid Layout - Staggered Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const categorySkills = getSkillsByCategory(category);
            const Icon = categoryIcons[category];
            const gradient = categoryGradients[category];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                }}
                className="relative"
              >
                {/* Card */}
                <div
                  className="relative p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden group h-full backdrop-blur-sm"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${gradient.from} ${gradient.to} border border-white/20`}
                      >
                        <Icon className={`w-6 h-6 ${gradient.icon}`} />
                      </div>
                      <h3 className="text-xl font-semibold capitalize text-white">{category}</h3>
                    </div>

                    {/* Skills Grid with Icons */}
                    <div className="grid grid-cols-2 gap-2">
                      {categorySkills.slice(0, 4).map((skill, i) => {
                        const icon = getSkillIcon(skill.name);
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2 text-xs hover:bg-white/10 transition-all cursor-default group/skill ${gradient.icon}`}
                          >
                            {icon && (
                              <span className="flex-shrink-0">
                                {icon}
                              </span>
                            )}
                            <span className="text-center text-white group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-blue-400 group-hover/skill:to-purple-400">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* More Skills Indicator */}
                    {categorySkills.length > 4 && (
                      <div className="mt-4 text-center">
                        <p className="text-xs text-gray-400 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <Zap className="w-3 h-3" />
                          +{categorySkills.length - 4} more
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
