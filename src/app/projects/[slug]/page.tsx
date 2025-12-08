"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { getSkillIcon } from "@/lib/skill-icons";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ParticleBackground } from "@/components/ui/particle-background";
import { customProjectDetails } from "@/lib/project-details";
import { ImageLightbox } from "@/components/ui/image-lightbox";

// Helper function to get project background color
function getProjectBackgroundColor(slug: string): string {
  const lowerSlug = slug.toLowerCase();
  
  if (lowerSlug.includes('travelink') || lowerSlug.includes('travi-link') || lowerSlug.includes('trave-link')) {
    if (lowerSlug.includes('mobile')) {
      return 'bg-red-50'; // Light red background for mobile
    }
    return 'bg-white'; // White background for Travelink
  }
  
  if (lowerSlug.includes('drive') && lowerSlug.includes('abi')) {
    return 'bg-white'; // White background for Drive Abi
  }
  
  if (lowerSlug.includes('sarap')) {
    return 'bg-gray-100'; // Light grey background for Sarap.io
  }
  
  if (lowerSlug.includes('plana')) {
    return 'bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800'; // Dark blue-purple gradient
  }
  
  if (lowerSlug.includes('alamat')) {
    return 'bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900'; // Dark blue-purple gradient
  }
  
  // Default gradient
  return 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20';
}

// Helper function to format project names
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
  created_at: string;
  updated_at: string;
  fork: boolean;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function loadRepo() {
      try {
        // First, try to get all repos to find the matching one
        const reposResponse = await fetch(`https://api.github.com/users/httplouis/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");
        const repos: GitHubRepo[] = await reposResponse.json();
        
        // Find repo by matching slug (case-insensitive, handle various formats)
        const repo = repos.find(r => 
          r.name.toLowerCase() === slug.toLowerCase() ||
          r.name.toLowerCase().replace(/-/g, "").replace(/_/g, "") === slug.toLowerCase().replace(/-/g, "").replace(/_/g, "") ||
          r.name.toLowerCase().replace(/-/g, "_") === slug.toLowerCase().replace(/-/g, "_")
        );
        
        if (repo) {
          setRepo(repo);
          // Fetch README after repo is loaded
          loadReadme(repo.name);
        } else {
          // Try direct API call as fallback
          const response = await fetch(`https://api.github.com/repos/httplouis/${slug}`);
          if (response.ok) {
            const data: GitHubRepo = await response.json();
            setRepo(data);
            loadReadme(data.name);
          } else {
            throw new Error("Repo not found");
          }
        }
      } catch (error) {
        console.error("Error fetching repo:", error);
        setRepo(null);
      } finally {
        setLoading(false);
      }
    }

    async function loadReadme(repoName: string) {
      setReadmeLoading(true);
      try {
        const response = await fetch(`https://api.github.com/repos/httplouis/${repoName}/readme`);
        if (response.ok) {
          const data = await response.json();
          // Decode base64 content (remove all whitespace including newlines)
          const base64Content = data.content.replace(/\s/g, '');
          const decoded = atob(base64Content);
          // Extract summary from README (first few paragraphs, remove markdown syntax)
          const summary = extractSummaryFromReadme(decoded);
          setReadmeContent(summary);
        } else {
          // README not found, use repo description
          setReadmeContent(null);
        }
      } catch (error) {
        console.error("Error fetching README:", error);
        setReadmeContent(null);
      } finally {
        setReadmeLoading(false);
      }
    }

    function extractSummaryFromReadme(content: string): string {
      // Remove markdown code blocks
      let text = content.replace(/```[\s\S]*?```/g, '');
      // Remove markdown links but keep text
      text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      // Remove markdown headers
      text = text.replace(/^#+\s+/gm, '');
      // Remove markdown images
      text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '');
      // Remove markdown bold/italic
      text = text.replace(/\*\*([^\*]+)\*\*/g, '$1');
      text = text.replace(/\*([^\*]+)\*/g, '$1');
      // Remove markdown lists
      text = text.replace(/^[\*\-\+]\s+/gm, '');
      // Remove extra whitespace
      text = text.replace(/\n{3,}/g, '\n\n').trim();
      
      // Extract first 2-3 paragraphs (first 500-800 characters)
      const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 50);
      const summary = paragraphs.slice(0, 3).join('\n\n').substring(0, 800);
      
      return summary || text.substring(0, 500);
    }

    loadRepo();
  }, [slug]);

  if (loading) {
    return (
      <>
        <ParticleBackground />
        <ScrollProgress />
        <FloatingNav />
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-white">Loading...</div>
        </div>
      </>
    );
  }

  if (!repo) {
    return (
      <>
        <ParticleBackground />
        <ScrollProgress />
        <FloatingNav />
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
            <Button onClick={() => router.push("/#projects")}>Back to Projects</Button>
          </div>
        </div>
      </>
    );
  }

  // Try multiple slug variations to find project details
  const getProjectDetails = (slug: string) => {
    const lowerSlug = slug.toLowerCase();
    const variations = [
      lowerSlug, // exact match
      lowerSlug.replace(/-/g, "_"), // hyphens to underscores
      lowerSlug.replace(/_/g, "-"), // underscores to hyphens
      lowerSlug.replace(/-/g, ""), // remove hyphens
      lowerSlug.replace(/_/g, ""), // remove underscores
      // Handle camelCase: "TraveLink-mobile" -> "travelink-mobile"
      lowerSlug.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    ];
    
    // Also try partial matches for common patterns
    if (lowerSlug.includes("travi") || lowerSlug.includes("travel")) {
      variations.push("travi-link", "travi_link", "travelink");
      // Check if it's the mobile version
      if (lowerSlug.includes("mobile")) {
        variations.push("travi-link-mobile", "travilink-mobile", "trave-link-mobile", "travi_link_mobile");
      }
    }
    if (lowerSlug.includes("drive") && lowerSlug.includes("abi")) {
      variations.push("drive-abi", "drive_abi", "driveabi");
    }
    
    for (const variation of variations) {
      if (customProjectDetails[variation]) {
        return customProjectDetails[variation];
      }
    }
    return {};
  };
  
  const customDetails = getProjectDetails(slug);
  const projectImages = customDetails.images || [];
  const hasCustomImages = projectImages.length > 0;
  const isMobileProject = slug.toLowerCase().includes('mobile');
  const isPlanaProject = slug.toLowerCase().includes('plana');
  const isSarapioProject = slug.toLowerCase().includes('sarap');

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <ParticleBackground />
      <ScrollProgress />
      <FloatingNav />
      <main className="relative min-h-screen bg-[#0a0a0a]">
        <div className="relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
              <Button
                variant="ghost"
                onClick={() => router.push("/#projects")}
                className="text-white hover:text-blue-400"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </div>
          </motion.div>

          {/* Hero Section with Main Image */}
          <section className="relative py-12 md:py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {formatProjectName(repo.name)}
                </h1>
                {repo.description && (
                  <p className="text-xl text-gray-300 max-w-3xl">
                    {repo.description.replace(/Travilink/gi, 'Travelink').replace(/TraviLink/gi, 'Travelink')}
                  </p>
                )}
              </motion.div>

                    {/* Main Preview Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 ${getProjectBackgroundColor(slug)} cursor-pointer group`}
                      onClick={() => hasCustomImages && openLightbox(0)}
                    >
                {hasCustomImages ? (
                  <>
                    {/* Preview image (logo) - no cropping */}
                    <div className="relative w-full h-full">
                      <Image
                        src={projectImages[0]}
                        alt={repo.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">
                        Click to view full image
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={`https://opengraph.githubassets.com/1/httplouis/${repo.name}`}
                      alt={repo.name}
                      fill
                      className="object-cover"
                      priority
                      onError={() => setImageError(true)}
                    />
                    {imageError && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="w-24 h-24 text-white/20" />
                      </div>
                    )}
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </motion.div>

              {/* Project Stats and Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{repo.stargazers_count}</span>
                  </div>
                )}
                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                    <GitFork className="w-5 h-5 text-purple-400" />
                    <span className="text-white">{repo.forks_count}</span>
                  </div>
                )}
                {repo.homepage && (
                  <Button
                    onClick={() => window.open(repo.homepage!, "_blank")}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => window.open(repo.html_url, "_blank")}
                  className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white bg-white/5 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4 mr-2 text-white" />
                  <span className="text-white">View on GitHub</span>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* About This Project Section */}
          <section className="py-12 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  <p className="text-blue-400 uppercase text-sm font-semibold tracking-wider">
                    ABOUT THIS PROJECT
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Project <GradientText>Overview</GradientText>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="md:col-span-2"
                >
                  <div className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-400" />
                      Description
                    </h3>
                    {readmeLoading ? (
                      <div className="text-gray-400 text-sm">Loading project summary...</div>
                    ) : (
                      <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                        {(() => {
                          const text = customDetails?.longDescription || 
                                       readmeContent || 
                                       repo.description || 
                                       "This project showcases modern web development practices and innovative solutions. Explore the codebase to see how it's built and what technologies power it.";
                          return text.replace(/Travilink/gi, 'Travelink').replace(/TraviLink/gi, 'Travelink');
                        })()}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Key Features */}
                {customDetails?.features && customDetails.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {customDetails.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Project Images Gallery */}
          {hasCustomImages && projectImages.length > 1 && (
            <section className="py-12 px-4 md:px-6 lg:px-8 bg-[#0f0f0f]">
              <div className="max-w-7xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-8"
                >
                  Project <GradientText>Gallery</GradientText>
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectImages.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 cursor-pointer group"
                      onClick={() => openLightbox(index + 1)}
                    >
                      {/* Gallery images (screenshots) - with cropping for mobile apps */}
                      <div
                        className="relative w-full h-full"
                        style={{
                          clipPath: (isMobileProject || isPlanaProject || isSarapioProject) 
                            ? (isSarapioProject ? "inset(8% 0 8% 0)" : "inset(8% 0 0 0)") 
                            : undefined,
                        }}
                      >
                        <Image
                          src={image}
                          alt={`${repo.name} screenshot ${index + 2}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{
                            objectPosition: isPlanaProject 
                              ? 'center 60%' 
                              : isMobileProject 
                              ? 'center 20%' 
                              : 'center'
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm">
                          Click to enlarge
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section - Always Visible */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Code className="w-6 h-6 text-blue-400" />
                      About This <GradientText>Project</GradientText>
                    </h2>
                    {readmeLoading ? (
                      <div className="text-gray-400 text-sm">Loading project summary...</div>
                    ) : (
                      <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                        {customDetails.longDescription || 
                         readmeContent || 
                         repo.description || 
                         "This project showcases modern web development practices and innovative solutions. It demonstrates proficiency in various technologies and best practices in software development."}
                      </p>
                    )}
                    {!customDetails.longDescription && !readmeContent && repo.description && (
                      <p className="text-gray-400 text-sm mt-4 italic">
                        For more details, visit the project repository on GitHub.
                      </p>
                    )}
                  </motion.div>

                  {/* Features */}
                  {customDetails.features && customDetails.features.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Key <GradientText>Features</GradientText>
                      </h2>
                      <ul className="space-y-3">
                        {customDetails.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Technology Stack */}
                  {customDetails.technologyStack && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Technology <GradientText>Stack</GradientText>
                      </h2>
                      <div className="space-y-4">
                        {customDetails.technologyStack.frontend && (
                          <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                              {customDetails.technologyStack.frontend.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {customDetails.technologyStack.backend && (
                          <div>
                            <h3 className="text-lg font-semibold text-purple-400 mb-2">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                              {customDetails.technologyStack.backend.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {customDetails.technologyStack.authentication && (
                          <div>
                            <h3 className="text-lg font-semibold text-pink-400 mb-2">Authentication</h3>
                            <div className="flex flex-wrap gap-2">
                              {customDetails.technologyStack.authentication.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-pink-500/20 to-pink-600/10 text-pink-400 border border-pink-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {customDetails.technologyStack.realTime && (
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Real-Time</h3>
                            <div className="flex flex-wrap gap-2">
                              {customDetails.technologyStack.realTime.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 text-yellow-400 border border-yellow-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {customDetails.technologyStack.additional && (
                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-2">Additional</h3>
                            <div className="flex flex-wrap gap-2">
                              {customDetails.technologyStack.additional.map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-green-500/20 to-green-600/10 text-green-400 border border-green-500/30">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Target Users */}
                  {customDetails.targetUsers && customDetails.targetUsers.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                    >
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Target <GradientText>Users</GradientText>
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {customDetails.targetUsers.map((user, index) => (
                          <span key={index} className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 text-indigo-400 border border-indigo-500/30">
                            {user}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {repo.language && (() => {
                        const languageIcon = getSkillIcon(repo.language);
                        return (
                          <span className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/30 flex items-center gap-2">
                            {languageIcon && <span>{languageIcon}</span>}
                            <span>{repo.language}</span>
                          </span>
                        );
                      })()}
                      {repo.topics.map((topic, i) => {
                        const topicIcon = getSkillIcon(topic);
                        return (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/30 flex items-center gap-2"
                          >
                            {topicIcon && <span>{topicIcon}</span>}
                            <span>{topic}</span>
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Language</span>
                        <span className="text-white">{repo.language || "N/A"}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Image Lightbox */}
      {hasCustomImages && projectImages.length > 0 && (
        <ImageLightbox
          images={projectImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
          projectName={repo.name}
          isMobile={isMobileProject || isPlanaProject || isSarapioProject}
        />
      )}
    </>
  );
}

