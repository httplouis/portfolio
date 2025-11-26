"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github, Star, GitFork } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { Card3D } from "@/components/ui/card-3d";
import { useEffect, useState } from "react";
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
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/httplouis/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data: GitHubRepo[] = await response.json();
        const filtered = data
          .filter((repo) => !repo.fork)
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
    <section id="projects" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 bg-[#0a0a0a]">
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
              <div key={i} className="h-64 bg-[#1a1a1a] rounded-lg animate-pulse" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card3D>
                  <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all h-full flex flex-col group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Code className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex gap-2">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                            aria-label="Visit website"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors text-white">
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-yellow-400" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1 text-purple-400">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {repo.language && (() => {
                        const languageIcon = getSkillIcon(repo.language);
                        return (
                          <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1.5">
                            {languageIcon && <span className="flex-shrink-0">{languageIcon}</span>}
                            <span>{repo.language}</span>
                          </span>
                        );
                      })()}
                      {repo.topics.slice(0, 3).map((topic, i) => {
                        const topicIcon = getSkillIcon(topic);
                        return (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1.5"
                          >
                            {topicIcon && <span className="flex-shrink-0">{topicIcon}</span>}
                            <span>{topic}</span>
                          </span>
                        );
                      })}
                      {repo.topics.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </Card>
                </Card3D>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
