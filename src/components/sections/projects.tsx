"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code, ExternalLink, Github, Star, GitFork, Sparkles } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { getSkillIcon } from "@/lib/skill-icons";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/httplouis/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data: GitHubRepo[] = await response.json();
        const excludedRepos = ['portfolio', 'rosales', 'semis-ios', 'semis_ios', 'semis-activity', 'semis_activity'];
        const filtered = data
          .filter((repo) => !repo.fork && !excludedRepos.some(excluded => repo.name.toLowerCase().includes(excluded.toLowerCase())))
          .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
          .slice(0, 12);
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative py-20 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #1a1a1a 100%)",
      }}
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 via-transparent to-transparent" 
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }} 
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Unusual Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 relative"
        >
          <motion.div
            animate={{ 
              width: ["60px", "120px", "60px"],
              x: [0, 20, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"
            style={{ transform: "skewX(15deg)" }}
          />
          <p className="text-blue-500 uppercase text-sm font-semibold tracking-wider mb-2">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <GradientText>Projects</GradientText>
          </h2>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="h-64 bg-[#1a1a1a] rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => {
              const isEven = index % 2 === 0;
              const isMiddle = index % 3 === 1;
              
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 50, rotate: isEven ? -3 : 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1, 
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: isEven ? 2 : -2,
                    y: -10,
                  }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card 
                    className="relative p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all h-full flex flex-col group overflow-hidden rounded-2xl"
                    data-cursor-hover
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-50 blur-xl transition-opacity"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                        >
                          <Code className="w-5 h-5 text-blue-400" />
                        </motion.div>
                        <div className="flex gap-2">
                          {repo.homepage && (
                            <motion.a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2, rotate: 90 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50"
                              aria-label="Visit website"
                              data-cursor-hover
                            >
                              <ExternalLink className="w-4 h-4 text-white" />
                            </motion.a>
                          )}
                          <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -90 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50"
                            aria-label="View on GitHub"
                            data-cursor-hover
                          >
                            <Github className="w-4 h-4 text-white" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all text-white"
                      >
                        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                      </motion.h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                        {repo.description || "No description available"}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        {repo.stargazers_count > 0 && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1 text-yellow-400"
                          >
                            <Star className="w-4 h-4 fill-yellow-400" />
                            <span>{repo.stargazers_count}</span>
                          </motion.div>
                        )}
                        {repo.forks_count > 0 && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1 text-purple-400"
                          >
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forks_count}</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Tags with Icons */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {repo.language && (() => {
                          const languageIcon = getSkillIcon(repo.language);
                          return (
                            <motion.span
                              whileHover={{ scale: 1.1, rotate: 2 }}
                              className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/30 flex items-center gap-1.5 backdrop-blur-sm"
                            >
                              {languageIcon && (
                                <motion.span
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                  className="flex-shrink-0"
                                >
                                  {languageIcon}
                                </motion.span>
                              )}
                              <span>{repo.language}</span>
                            </motion.span>
                          );
                        })()}
                        {repo.topics.slice(0, 3).map((topic, i) => {
                          const topicIcon = getSkillIcon(topic);
                          return (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1, rotate: -2 }}
                              className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5 backdrop-blur-sm"
                            >
                              {topicIcon && (
                                <motion.span
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                  className="flex-shrink-0"
                                >
                                  {topicIcon}
                                </motion.span>
                              )}
                              <span>{topic}</span>
                            </motion.span>
                          );
                        })}
                        {repo.topics.length > 3 && (
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 rounded-full text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 backdrop-blur-sm flex items-center gap-1"
                          >
                            <Sparkles className="w-3 h-3" />
                            +{repo.topics.length - 3}
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
