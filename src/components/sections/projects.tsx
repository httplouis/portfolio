"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github, Star, GitFork, Sparkles } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { getSkillIcon } from "@/lib/skill-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { customProjectDetails } from "@/lib/project-details";

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

// Helper function to format project names
// Helper function to get project background color
function getProjectBackgroundColor(repoName: string): string {
  const lowerName = repoName.toLowerCase();
  
  if (lowerName.includes('travelink') || lowerName.includes('travi-link') || lowerName.includes('trave-link')) {
    if (lowerName.includes('mobile')) {
      return 'bg-red-50'; // Light red background for mobile
    }
    return 'bg-white'; // White background for Travelink
  }
  
  if (lowerName.includes('drive') && lowerName.includes('abi')) {
    return 'bg-white'; // White background for Drive Abi
  }
  
  if (lowerName.includes('sarap')) {
    return 'bg-gray-100'; // Light grey background for Sarap.io
  }
  
  if (lowerName.includes('plana')) {
    return 'bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800'; // Dark blue-purple gradient
  }
  
  if (lowerName.includes('alamat')) {
    return 'bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900'; // Dark blue-purple gradient
  }
  
  // Default gradient
  return 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20';
}

function formatProjectName(name: string): string {
  const lowerName = name.toLowerCase();
  
  // Handle Travelink variations
  if (lowerName.includes('travelink') || lowerName.includes('travi-link') || lowerName.includes('trave-link')) {
    if (lowerName.includes('mobile')) {
      return 'Travelink mobile';
    }
    return 'Travelink';
  }
  
  // Default: capitalize first letter of each word
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/httplouis/repos?sort=updated&per_page=100`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data: GitHubRepo[] = await response.json();
        const excludedRepos = ['portfolio', 'rosales', 'semis-ios', 'semis_ios', 'semis-activity', 'semis_activity', 'httplouis'];
        
        // Helper function to check if a project has custom details (featured)
        const isFeatured = (repoName: string): boolean => {
          const lowerName = repoName.toLowerCase();
          const variations = [
            lowerName,
            lowerName.replace(/-/g, "_"),
            lowerName.replace(/_/g, "-"),
            lowerName.replace(/-/g, ""),
            lowerName.replace(/_/g, ""),
            lowerName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          ];
          
          if (lowerName.includes("travi") || lowerName.includes("travel")) {
            if (lowerName.includes("mobile")) {
              variations.push("travelink-mobile", "travilink-mobile", "travi-link-mobile", "trave-link-mobile", "travi_link_mobile");
            } else {
              variations.unshift("travelink", "travi-link", "trave-link");
              variations.push("travi_link", "trave_link");
            }
          }
          if (lowerName.includes("drive") && lowerName.includes("abi")) {
            variations.push("drive-abi", "drive_abi", "driveabi");
          }
          
          return variations.some(variation => customProjectDetails[variation] !== undefined);
        };
        
        const filtered = data
          .filter((repo) => !repo.fork && !excludedRepos.some(excluded => repo.name.toLowerCase().includes(excluded.toLowerCase())))
          .sort((a, b) => {
            // Prioritize featured projects (those with custom details)
            const aIsFeatured = isFeatured(a.name);
            const bIsFeatured = isFeatured(b.name);
            if (aIsFeatured && !bIsFeatured) return -1;
            if (!aIsFeatured && bIsFeatured) return 1;
            
            // Among featured projects, prioritize "drive-abi"
            if (aIsFeatured && bIsFeatured) {
              const aIsDriveAbi = a.name.toLowerCase().includes('drive') && a.name.toLowerCase().includes('abi');
              const bIsDriveAbi = b.name.toLowerCase().includes('drive') && b.name.toLowerCase().includes('abi');
              if (aIsDriveAbi && !bIsDriveAbi) return -1;
              if (!aIsDriveAbi && bIsDriveAbi) return 1;
            }
            
            // Otherwise sort by stars + forks
            return (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count);
          })
          .slice(0, 12); // Show all featured projects
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 via-transparent to-transparent" 
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Unusual Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 relative"
        >
          <div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"
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
              
              // Get custom project details
              const getProjectDetails = (repoName: string) => {
                const lowerName = repoName.toLowerCase();
                // Generate all possible variations
                const variations = [
                  lowerName, // exact match
                  lowerName.replace(/-/g, "_"), // hyphens to underscores
                  lowerName.replace(/_/g, "-"), // underscores to hyphens
                  lowerName.replace(/-/g, ""), // remove hyphens
                  lowerName.replace(/_/g, ""), // remove underscores
                  // Handle camelCase: "TraveLink" -> "travelink" -> try "travi-link"
                  lowerName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), // camelCase to kebab-case
                ];
                
                // Also try partial matches for common patterns
                if (lowerName.includes("travi") || lowerName.includes("travel")) {
                  // Check if it's the mobile version
                  if (lowerName.includes("mobile")) {
                    variations.push("travelink-mobile", "travilink-mobile", "travi-link-mobile", "trave-link-mobile", "travi_link_mobile");
                  } else {
                    // For non-mobile, prioritize "travelink" first (exact repo name)
                    variations.unshift("travelink", "travi-link", "trave-link");
                    variations.push("travi_link", "trave_link");
                  }
                }
                if (lowerName.includes("drive") && lowerName.includes("abi")) {
                  variations.push("drive-abi", "drive_abi", "driveabi");
                }
                
                for (const variation of variations) {
                  if (customProjectDetails[variation]) {
                    console.log(`✅ Matched repo "${repoName}" to variation "${variation}"`);
                    return customProjectDetails[variation];
                  }
                }
                console.log(`❌ No match found for repo "${repoName}". Tried variations:`, variations.slice(0, 10));
                return null;
              };
              
              const projectDetails = getProjectDetails(repo.name);
              const customImage = projectDetails?.images && projectDetails.images.length > 0 
                ? projectDetails.images[0] 
                : null;
              
              // Debug: Log to see what's happening (remove in production)
              if (repo.name.toLowerCase().includes('travi') || repo.name.toLowerCase().includes('travel')) {
                console.log('TraviLink repo:', repo.name, 'Custom image:', customImage, 'Project details:', projectDetails);
              }
              
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05, 
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                  }}
                  className="relative"
                >
                  <Card 
                    className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all h-full flex flex-col group overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => router.push(`/projects/${repo.name.toLowerCase().replace(/_/g, "-")}`)}
                  >
                    {/* Gradient Background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Glow Effect */}
                    <div
                      className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                    />

                    {/* Project Preview Image */}
                    <div className={`relative w-full h-48 overflow-hidden ${getProjectBackgroundColor(repo.name)}`}>
                      {customImage ? (
                        /* Preview image (logo) - no cropping, use object-contain */
                        <div className="relative w-full h-full">
                          <Image
                            src={customImage}
                            alt={`${repo.name} preview`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                        </div>
                      ) : (
                        <Image
                          src={`https://opengraph.githubassets.com/1/httplouis/${repo.name}`}
                          alt={`${repo.name} preview`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Hide image on error, show gradient background
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-70" />
                      {/* Fallback gradient pattern if image fails */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="relative z-10 p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                          <Code className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex gap-2">
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50"
                              aria-label="Visit website"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(repo.homepage!, "_blank");
                              }}
                            >
                              <ExternalLink className="w-4 h-4 text-white" />
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/50"
                            aria-label="View on GitHub"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(repo.html_url, "_blank");
                            }}
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all text-white">
                        {formatProjectName(repo.name)}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                        {projectDetails?.briefDescription || repo.description || "No description available"}
                      </p>

                      {/* Stats */}
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

                      {/* Tags with Icons */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {repo.language && (() => {
                          const languageIcon = getSkillIcon(repo.language);
                          return (
                            <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/30 flex items-center gap-1.5 backdrop-blur-sm">
                              {languageIcon && (
                                <span className="flex-shrink-0">
                                  {languageIcon}
                                </span>
                              )}
                              <span>{repo.language}</span>
                            </span>
                          );
                        })()}
                        {repo.topics.slice(0, 3).map((topic, i) => {
                          const topicIcon = getSkillIcon(topic);
                          return (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5 backdrop-blur-sm"
                            >
                              {topicIcon && (
                                <span className="flex-shrink-0">
                                  {topicIcon}
                                </span>
                              )}
                              <span>{topic}</span>
                            </span>
                          );
                        })}
                        {repo.topics.length > 3 && (
                          <span className="px-3 py-1 rounded-full text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 backdrop-blur-sm flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            +{repo.topics.length - 3}
                          </span>
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
